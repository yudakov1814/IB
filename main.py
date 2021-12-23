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
    assert(session_key != TEST_KEY)
    cipher = aes.CipherAES(session_key)


@app.route('/api/eval_msg', methods=['POST'])
def eval_msg() -> dict:
    if request.method == ['POST']:
        msg = request.form['message']
        hsh = request.form['hash']
        decrypted_message = cipher.decrypt(msg)
        hashed_message = hash_func(decrypted_message)
        solved = eval(decrypted_message)
        encrypted_message = cipher.encrypt(str(solved))
        return {
            'hash': hashed_message,
            'message': encrypted_message
        }


def mock_eval_msg(msg: str, hashed: str) -> dict:
    decrypted_message = cipher.decrypt(msg)
    hashed_message = hash_func(decrypted_message)

    solved = eval(decrypted_message)
    encrypted_message = cipher.encrypt(str(solved))
    return {
        'hash': hashed_message,
        'message': encrypted_message
    }

@app.route("/api/get_public_key")
def get_public_key(len: int) -> rsa.PublicKey:
    global private_key
    (public_key, private_key) = rsa.new_keys(len)
    return public_key


def hash_func(msg: str):
    result = hashlib.md5(msg.encode('utf8'))
    return str(result.hexdigest())


def test():
    test_public_key = get_public_key(192)
    encrypted_key = rsa.encrypt(TEST_KEY, test_public_key)
    print(f'encrypted_key : {encrypted_key}')
    set_session_key(encrypted_key)

    test_messages = ['1 + 1',
                     '2 * 2',
                     '3 / 2']

    test_hashes = [hash_func(message) for message in test_messages]
    dictionary = dict(zip(test_messages, test_hashes))

    for msg, hsh in dictionary.items():
        pass
        #print(f'the message is {msg} and the hash is {hsh}')
    ''' msg = cipher.encrypt(msg)
        msg_n_hash = mock_eval_msg(msg, hsh)
        msg = cipher.decrypt(msg_n_hash['msg'])'''


if __name__ == '__main__':
    test()
    app.run(debug=True)


@app.route("/api/mirror")
def mirror(msg):
    return msg
