import rsa
import aes

from flask import Flask, render_template

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


@app.route("/api/mirror/<msg>")
def mirror(msg):
    return msg


@app.route("/home")
def connect():
    return render_template("connect.html")


if __name__ == "__main__":
    app.run(debug=True)
