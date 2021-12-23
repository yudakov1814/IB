from typing import Dict

import rsa
import aes
import hashlib
from sys import getsizeof

from flask import Flask, request

app = Flask(__name__)

TEST_KEY = 3480299736719771887772948464190228533233280192811212880921  # 192 bits
session_key = int
private_key = rsa.PrivateKey
cipher = aes.CipherAES


@app.route("/api/set_session_key")
def set_session_key(key: int) -> None:
    global session_key, cipher
    session_key = rsa.decrypt(key, private_key)
    cipher = aes.CipherAES(session_key)


@app.route('/api/eval_msg', methods=['POST'])
def eval_msg() -> dict:
    if request.method == ['POST']:
        msg = request.form['message']
        hsh = request.form['hash']
        decrypted_message = cipher.decrypt(msg)
        hashed_message = hash_func(decrypted_message)
        solved = eval(decrypted_message)
        message = cipher.encrypt(str(solved))
        if hashed_message != hsh:
            message = 'Integrity Error!'
        return {
            'hash': hashed_message,
            'message': message
        }


def mock_eval_msg(msg: str, hsh: str) -> dict:
    decrypted_message = cipher.decrypt(msg)
    hashed_message = hash_func(decrypted_message)
    solved = eval(decrypted_message)
    message = cipher.encrypt(str(solved))
    if hashed_message != hsh:
        message = 'Integrity Error!'
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


def test():
    test_public_key = get_public_key(512)
    encrypted_key = rsa.encrypt(TEST_KEY, test_public_key)
    set_session_key(encrypted_key)

    test_messages = ['2',
                     '2 * 2',
                     '3 / 2',
                     '(1 + 2 * 3)/22 + 10*1.287']

    test_hashes = [hash_func(message) for message in test_messages]
    dictionary = dict(zip(test_messages, test_hashes))

    for msg, hsh in dictionary.items():
        print(f'1)sent message was {msg}\n2)sent hash was {hsh}')
        msg = cipher.encrypt(msg)
        dictionary = mock_eval_msg(msg, hsh)
        recieved_message = cipher.decrypt(dictionary['message'])
        recieved_hash = dictionary['hash']
        print(f'3)recieved message is {recieved_message}\n4)recieved hash is {recieved_hash}')
        print('--------------------------------------------------------------------------------')
        assert(hsh == recieved_hash)


if __name__ == '__main__':
    test()
    app.run(debug=True)


@app.route("/api/mirror")
def mirror(msg):
    return msg
