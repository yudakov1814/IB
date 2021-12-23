import rsa
import aes

from flask import Flask

app = Flask(__name__)


TEST_KEY = 3480299736719771887772948464190228533233280192811212880921  # 192 bits


@app.route("/")
def hello_world():
    cipher = aes.CipherAES(TEST_KEY)
    msg = "Hi, it's ascii text + русские буквы"
    encrypt = cipher.encrypt(msg)
    decrypt = cipher.decrypt(encrypt)

    return {
        "source_msg": msg,
        "encrypt": encrypt,
        "decrypt": decrypt,
    }

@app.route("/api/mirror")
def mirror(msg):
    return msg
