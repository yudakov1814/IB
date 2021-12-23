import rsa
import aes
import hashlib

from flask import Flask, request

app = Flask(__name__)

#TEST_KEY = 3480299736719771887772948464190228533233280192811212880921  # 192 bits
session_private_key = int


@app.route("/api/set_session_key")
def set_session_key(key: int) -> None:
    global session_private_key
    session_private_key = key


@app.route('/api/eval_msg', methods=['POST'])
def eval_msg() -> dict:
    if request.method == ['POST']:
        msg = request.form['message']
        decrypted_message = decrypt_message(msg)
        hashed_message = hash_func(decrypted_message)

        if decrypted_message.isnumeric():
            solved = eval(decrypted_message)
            encrypted_message = encrypt_message(str(solved))
            return {
                'hashed message': hashed_message,
                'encrypted message': encrypted_message
            }
        else:
            return {
                'Exception': 'Number expected!'
            }


@app.route("/api/get_public_key")
def get_public_key(len: int) -> dict:
    (public_key, _) = rsa.new_keys(len)
    return {
        'e': public_key.e,
        'n': public_key.n
    }


def hash_func(msg: str):
    result = hashlib.md5(b'{msg}')
    return result.hexdigest()


def decrypt_message(msg: str):
    cipher = aes.CipherAES(session_private_key)
    decrypted = cipher.decrypt(msg)
    return decrypted


def encrypt_message(msg: str):
    cipher = aes.CipherAES(session_private_key)
    encrypted = cipher.encrypt(msg)
    return encrypted

'''@app.route("/")
def hello_world():
    cipher = aes.CipherAES(TEST_KEY)
    msg = "Hi, it's ascii text + русские буквы"
    encrypt = cipher.encrypt(msg)
    decrypt = cipher.decrypt(encrypt)

    return {
        "source_msg": msg,
        "encrypt": encrypt,
        "decrypt": decrypt,
    }'''

if __name__ == '__main__':
    app.run(debug=True)

@app.route("/api/mirror")
def mirror(msg):
    return msg
