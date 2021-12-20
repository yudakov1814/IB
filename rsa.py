import typing
import random

from miller_rabin import miller_rabin


EXPONENT = 65537


class PublicKey:
    def __init__(self, n: int, e: int) -> None:
        self.n = n
        self.e = e


class PrivateKey:
    def __init__(self, n: int, d: int) -> None:
        self.n = n
        self.d = d


def encrypt(msg: int, public_key: PublicKey) -> int:
    if msg < 0 or msg >= public_key.n:
        raise ValueError("bad msg")
    return pow(msg, public_key.e, public_key.n)


def decrypt(msg: int, private_key: PrivateKey) -> int:
    if msg < 0 or msg >= private_key.n:
        raise ValueError("bad msg")
    return pow(msg, private_key.d, private_key.n)


def new_keys(nbits: int) -> typing.Tuple[PublicKey, PrivateKey]:
    is_good = False
    while not is_good:
        (p, q) = find_p_q(nbits // 2)
        (e, d, is_good) = calculate_e_d(p, q)

    n = p * q

    return PublicKey(n, e), PrivateKey(n, d)


def calculate_e_d(p: int, q: int) -> typing.Tuple[int, int]:
    phi_n = (p - 1) * (q - 1)

    (divider, d, _) = gcd(EXPONENT, phi_n)

    return EXPONENT, d, divider == 1 and (EXPONENT * d) % phi_n == 1


def gcd(a: int, b: int) -> typing.Tuple[int, int, int]:
    x = 0
    y = 1
    lx = 1
    ly = 0
    oa = a
    ob = b
    while b != 0:
        q = a // b
        (a, b) = (b, a % b)
        (x, lx) = ((lx - (q * x)), x)
        (y, ly) = ((ly - (q * y)), y)
    if lx < 0:
        lx += ob
    if ly < 0:
        ly += oa
    return a, lx, ly


def find_p_q(nbits: int) -> typing.Tuple[int, int]:
    total_bits = nbits * 2

    # Make sure that p and q aren't too close or the factoring programs can factor n.
    shift = nbits // 16
    pbits = nbits + shift
    qbits = nbits - shift

    p = get_prime(pbits)
    q = get_prime(qbits)

    change_p = False
    while p == q or total_bits != (p * q).bit_length():
        # Change p on one iteration and q on the other
        if change_p:
            p = get_prime(pbits)
        else:
            q = get_prime(qbits)

        change_p = not change_p

    return max(p, q), min(p, q)


def get_prime(nbits: int) -> int:
    while True:
        integer = random.getrandbits(nbits)
        if miller_rabin(integer):
            return integer


# tests
session_key = 1234567890
for nbits in (128, 192, 256, 512, 1024, 2048):
    public_key, private_key = new_keys(nbits)
    encrypt_msg = encrypt(session_key, public_key)
    decrypt_msg = decrypt(encrypt_msg, private_key)
    assert(encrypt_msg != session_key)
    assert(decrypt_msg == session_key)
