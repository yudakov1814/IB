import json
import rsa
import aes
import hashlib

from flask import (
    Flask,
    request,
    render_template,
)

app = Flask(__name__)

TEST_KEY = 3480299736719771887772948464190228533233280192811212880921  # 192 bits
private_key: rsa.PrivateKey
cipher: aes.CipherAES


@app.route("/")
def home():
    return render_template("home.html")


@app.route("/api/get_public_key/<int:length>")
def get_public_key(length: int) -> dict:
    global private_key
    (public_key, private_key) = rsa.new_keys(length)
    return public_key.to_dict()


@app.route("/api/set_session_key", methods=["POST"])
def set_session_key() -> dict:
    try:
        key = request.form["message"]
        hsh = request.form["hash"]

        session_key = rsa.decrypt(int(key), private_key)
        if hash_func(str(session_key)) != hsh:
            raise ValueError("hash functions don't match")

        global cipher
        cipher = aes.CipherAES(session_key)

        message = "ok"
    except Exception as e:
        message = str(e)

    return {
        "hash": hash_func(message),
        "message": cipher.encrypt(message),
    }


@app.route("/api/request_msg", methods=["POST"])
def request_msg() -> dict:
    message = json.loads(request.form["message"])
    hsh = request.form["hash"]
    return eval_msg(message, hsh)


def eval_msg(msg: list, hsh: str) -> dict:
    try:
        decrypted_message = cipher.decrypt(msg)
        if hash_func(decrypted_message) != hsh:
            raise ValueError("hash functions don't match")
        message = str(eval(decrypted_message))
    except Exception as e:
        message = str(e)

    return {
        "hash": hash_func(message),
        "message": cipher.encrypt(message),
    }


def hash_func(msg: str):
    result = hashlib.sha256(msg.encode("utf8"))
    return str(result.hexdigest())


def test(input, expected):
    global cipher
    cipher = aes.CipherAES(TEST_KEY)

    hsh = hash_func(input)
    msg = cipher.encrypt(input)

    dictionary = eval_msg(msg, hsh)
    recieved_enc_message = dictionary["message"]
    recieved_hash = dictionary["hash"]
    recieved_message = cipher.decrypt(recieved_enc_message)

    assert recieved_message == expected
    assert hash_func(recieved_message) == recieved_hash


if __name__ == "__main__":
    test("1 + 2 * 3", "7")
    test("1//////3", "invalid syntax (<string>, line 1)")
    test("error", "name 'error' is not defined")
    app.run(debug=True)
