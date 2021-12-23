import rsa
import aes
import hashlib

from flask import Flask, request

app = Flask(__name__)

TEST_KEY = 3480299736719771887772948464190228533233280192811212880921  # 192 bits
private_key: rsa.PrivateKey
cipher: aes.CipherAES


@app.route("/api/set_session_key")
def set_session_key(key: int) -> str:
    try:
        global cipher
        session_key = rsa.decrypt(key, private_key)
        cipher = aes.CipherAES(session_key)
    except Exception:
        return 'Error'
    return 'Session key set successfully'


@app.route('/api/request_msg', methods=['POST'])
def request_msg(msg: str, hsh: str) -> dict:
    if request.method == ['POST']:
        message = request.form['message']
        hash = request.form['hash']
        return eval_msg(message, hash)


def eval_msg(msg: str, hsh: str) -> dict:
    try:
        decrypted_message = cipher.decrypt(msg)
        solved = eval(decrypted_message)
    except (ValueError, SyntaxError, NameError):
        message = 'Error!'
        hashed_message = hash_func(message)
        message = cipher.encrypt(message)
        return {
            'hash': hashed_message,
            'message': message
        }

    message = cipher.encrypt(str(solved))
    hashed_message = hash_func(decrypted_message)
    if hashed_message != hsh:
        message = 'Error!'
    return {
        'hash': hashed_message,
        'message': message
    }


@app.route("/api/get_public_key")
def get_public_key(length: int) -> rsa.PublicKey:
    global private_key
    (public_key, private_key) = rsa.new_keys(length)
    return public_key


def hash_func(msg: str):
    result = hashlib.md5(msg.encode('utf8'))
    return str(result.hexdigest())


def test(input, expected):
    encrypted_key = rsa.encrypt(TEST_KEY, get_public_key(512))
    set_session_key(encrypted_key)

    print(f'sent message is {input}')

    hsh = hash_func(input)
    msg = cipher.encrypt(input)

    print(f'hash is {hsh}\nencrypted message is {msg}')

    dictionary = eval_msg(msg, hsh)
    recieved_enc_message = dictionary['message']
    recieved_hash = dictionary['hash']
    recieved_message = cipher.decrypt(recieved_enc_message)
    print('--------------------------------------------------------------------------------------------------------')
    print(f'recieved hash is {recieved_hash}\n'
          f'recieved message is {recieved_message}\n')

    assert((recieved_message == str(expected)) & (hsh == recieved_hash))


if __name__ == '__main__':
    test('1 + 2 * 3', '7')
    app.run(debug=True)


@app.route("/api/mirror")
def mirror(msg):
    return msg
