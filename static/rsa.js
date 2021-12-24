function rsa_encrypt(msg, n, e) {
    result = 1n;
    bigMsg = BigInt(msg);
    bigN = BigInt(n);

    if (bigMsg < 0n || bigMsg >= bigN) {
        throw Error("bad msg");
    }

    for (let i = 0; i < e; i++) {
        result = (result * bigMsg) % bigN;
    }

    return String(result);
}
