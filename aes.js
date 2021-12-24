Sbox = [
    0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76,
    0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0,
    0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15,
    0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75,
    0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84,
    0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf,
    0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8,
    0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2,
    0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73,
    0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb,
    0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79,
    0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08,
    0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a,
    0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e,
    0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf,
    0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16,
]

InvSbox = [
    0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb,
    0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb,
    0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e,
    0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25,
    0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92,
    0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84,
    0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06,
    0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b,
    0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73,
    0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e,
    0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b,
    0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4,
    0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f,
    0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef,
    0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61,
    0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d,
]

Rcon = [
    [0x00, 0x00, 0x00, 0x00],
    [0x01, 0x00, 0x00, 0x00],
    [0x02, 0x00, 0x00, 0x00],
    [0x04, 0x00, 0x00, 0x00],
    [0x08, 0x00, 0x00, 0x00],
    [0x10, 0x00, 0x00, 0x00],
    [0x20, 0x00, 0x00, 0x00],
    [0x40, 0x00, 0x00, 0x00],
    [0x80, 0x00, 0x00, 0x00],
    [0x1b, 0x00, 0x00, 0x00],
    [0x36, 0x00, 0x00, 0x00],
]

function get_session_key(nbits) {
    result = ['0', 'b', '1'];
    for (let i = 1; i < nbits; i++) {
        if (Math.random() < 0.5) {
            result.push(0);
        } else {
            result.push(1);
        }
    }

    return String(BigInt(result.join('')));
}

class CipherAES {
    constructor(key) {
        key = BigInt(key);

        this.key = [];

        let byte = BigInt(256);
        while (key > 0) {
            this.key.push(Number(key % byte));
            key /= byte;
        }
        this.key = this.key.reverse();

        let key_lenght = this.key.length;
        if (key_lenght != 16 && key_lenght != 24 && key_lenght != 32) {
            throw Error(`bad key, length: ${key_lenght} bytes`);
        }

        this.Nk = key_lenght / 4;
        this.Nb = 4;
        this.Nr = 6 + this.Nk; // number rounds
    }

    encrypt(msg) {
        let bytes = [];
        for (var i = 0; i < msg.length; ++i) {
            bytes.push(msg.charCodeAt(i));
        }

        let chunk_size = 16;  // byte
        let msg_len = bytes.length;
        let empty_len = (chunk_size - msg_len % chunk_size) % chunk_size;
        for (var i = 0; i < empty_len; ++i) {
            bytes.push(0);
        }

        let chunks = []
        for (let i = 0; i < bytes.length; i += chunk_size) {
            chunks.push([]);
            for (let j = 0; j < chunk_size; j++) {
                chunks[chunks.length - 1].push(bytes[i + j]);
            }
        }

        for (let i = 0; i < chunks.length; i++) {
            chunks[i] = this._encrypt_chunk(chunks[i]);
        }

        let result = [];
        for (let i = 0; i < chunks.length; i++) {
            for (let j = 0; j < chunks[i].length; j++) {
                result.push(chunks[i][j]);
            }
        }

        return result;
    }

    _encrypt_chunk(chunk) {
        let keys = this._key_expansion();

        chunk = this._add_round_key(chunk, keys[0]);

        for (let i = 1; i < this.Nr - 1; i++) {
            chunk = this._sub_bytes(chunk);
            chunk = this._shift_rows(chunk);
            chunk = this._mix_columns(chunk);
            chunk = this._add_round_key(chunk, keys[i]);
        }

        chunk = this._sub_bytes(chunk);
        chunk = this._shift_rows(chunk);
        chunk = this._add_round_key(chunk, keys[this.Nr - 1]);

        return chunk;
    }

    decrypt(msg) {
        let chunk_size = 16; // byte
        let msg_len = msg.length;

        if (msg_len % chunk_size != 0) {
            throw Error(`bad msg, msg_len: ${msg_len}, chunk_size: ${chunk_size}`)
        }

        let chunks = []
        for (let i = 0; i < msg_len; i += chunk_size) {
            chunks.push([]);
            for (let j = 0; j < chunk_size; j++) {
                chunks[chunks.length - 1].push(msg[i + j]);
            }
        }

        for (let i = 0; i < chunks.length; i++) {
            chunks[i] = this._decrypt_chunk(chunks[i]);
        }

        let result = [];
        for (let i = 0; i < chunks.length; i++) {
            for (let j = 0; j < chunks[i].length; j++) {
                result.push(chunks[i][j]);
            }
        }
        while (result[result.length - 1] == 0) {
            result.pop();
        }

        let result_msg = [];
        for (let i = 0; i < result.length; i++) {
            result_msg.push(String.fromCharCode(result[i]));
        }

        return result_msg.join('');
    }

    _decrypt_chunk(chunk) {
        let keys = this._key_expansion();

        chunk = this._add_round_key(chunk, keys[this.Nr - 1]);

        for (let i = this.Nr - 2; i > 0; i--) {
            chunk = this._inv_shift_rows(chunk);
            chunk = this._inv_sub_bytes(chunk);
            chunk = this._add_round_key(chunk, keys[i]);
            chunk = this._inv_mix_columns(chunk);
        }

        chunk = this._inv_shift_rows(chunk);
        chunk = this._inv_sub_bytes(chunk);
        chunk = this._add_round_key(chunk, keys[0]);

        return chunk;
    }

    _sub_bytes(chunk) {
        for (let i = 0; i < chunk.length; i++) {
            chunk[i] = Sbox[chunk[i]];
        }

        return chunk;
    }

    _inv_sub_bytes(chunk) {
        for (let i = 0; i < chunk.length; i++) {
            chunk[i] = InvSbox[chunk[i]];
        }

        return chunk;
    }

    _shift_rows(chunk) {
        return [
            chunk[0], chunk[1], chunk[2], chunk[3],
            chunk[5], chunk[6], chunk[7], chunk[4],
            chunk[10], chunk[11], chunk[8], chunk[9],
            chunk[15], chunk[12], chunk[13], chunk[14],
        ];
    }

    _inv_shift_rows(chunk) {
        return [
            chunk[0], chunk[1], chunk[2], chunk[3],
            chunk[7], chunk[4], chunk[5], chunk[6],
            chunk[10], chunk[11], chunk[8], chunk[9],
            chunk[13], chunk[14], chunk[15], chunk[12],
        ];
    }

    _mix_columns(chunk) {
        for (let i = 0; i < 4; i++) {
            let result = [
                this.mul(2, chunk[i])
                ^ this.mul(3, chunk[i + 4])
                ^ this.mul(1, chunk[i + 8])
                ^ this.mul(1, chunk[i + 12]),
                this.mul(1, chunk[i])
                ^ this.mul(2, chunk[i + 4])
                ^ this.mul(3, chunk[i + 8])
                ^ this.mul(1, chunk[i + 12]),
                this.mul(1, chunk[i])
                ^ this.mul(1, chunk[i + 4])
                ^ this.mul(2, chunk[i + 8])
                ^ this.mul(3, chunk[i + 12]),
                this.mul(3, chunk[i])
                ^ this.mul(1, chunk[i + 4])
                ^ this.mul(1, chunk[i + 8])
                ^ this.mul(2, chunk[i + 12]),
            ];

            chunk[i] = result[0];
            chunk[i + 4] = result[1];
            chunk[i + 8] = result[2];
            chunk[i + 12] = result[3];
        }

        return chunk;
    }

    _inv_mix_columns(chunk) {
        for (let i = 0; i < 4; i++) {
            let result = [
                this.mul(14, chunk[i])
                ^ this.mul(11, chunk[i + 4])
                ^ this.mul(13, chunk[i + 8])
                ^ this.mul(9, chunk[i + 12]),
                this.mul(9, chunk[i])
                ^ this.mul(14, chunk[i + 4])
                ^ this.mul(11, chunk[i + 8])
                ^ this.mul(13, chunk[i + 12]),
                this.mul(13, chunk[i])
                ^ this.mul(9, chunk[i + 4])
                ^ this.mul(14, chunk[i + 8])
                ^ this.mul(11, chunk[i + 12]),
                this.mul(11, chunk[i])
                ^ this.mul(13, chunk[i + 4])
                ^ this.mul(9, chunk[i + 8])
                ^ this.mul(14, chunk[i + 12]),
            ]

            chunk[i] = result[0];
            chunk[i + 4] = result[1];
            chunk[i + 8] = result[2];
            chunk[i + 12] = result[3];
        }

        return chunk
    }

    mul(a, b) {
        let result = 0;
        let first = a;
        let current = b & 0xFF;

        while (first != 0) {
            if ((first & 0x01) != 0) {
                result ^= current;
            }
            first >>= 1;
            current = this.times2(current);
        }

        return result & 0xFF;
    }

    times2(x) {
        let result = x << 1;

        if ((x & 0x80) != 0) {
            result ^= 0x1B;
        }

        return result & 0xFF;
    }

    _add_round_key(chunk, key) {
        return this._xor(chunk, key)
    }

    _key_expansion() {
        let key_parts = [];
        for (let i = 0; i < this.Nk; i++) {
            key_parts.push([this.key[4 * i], this.key[4 * i + 1], this.key[4 * i + 2], this.key[4 * i + 3]])
        }

        for (let i = this.Nk; i < this.Nb * (this.Nr + 1); i++) {
            let temp = key_parts[i - 1];
            if (i % this.Nk == 0) {
                temp = this._rot_word(temp);
                temp = this._sub_word(temp);
                temp = this._xor(temp, Rcon[i / this.Nk]);
            }
            else if (this.Nk > 6 && i % this.Nk == 4) {
                temp = this._sub_word(temp);
            }

            key_parts.push(this._xor(key_parts[i - this.Nk], temp));
        }

        let keys = [];
        for (let i = 0; i < key_parts.length; i += 4) {
            keys.push([
                key_parts[i][0], key_parts[i][1], key_parts[i][2], key_parts[i][3],
                key_parts[i + 1][0], key_parts[i + 1][1], key_parts[i + 1][2], key_parts[i + 1][3],
                key_parts[i + 2][0], key_parts[i + 2][1], key_parts[i + 2][2], key_parts[i + 2][3],
                key_parts[i + 3][0], key_parts[i + 3][1], key_parts[i + 3][2], key_parts[i + 3][3],
            ]);
        }

        return keys;
    }

    _rot_word(word) {
        return [
            word[1], word[2], word[3], word[0]
        ];
    }

    _sub_word(word) {
        for (let i = 0; i < word.length; i++) {
            word[i] = Sbox[word[i]];
        }

        return word;
    }

    _xor(a, b) {
        if (a.length != b.length) {
            throw Error(`_xor error, a.length: ${a.length}, b.length: ${b.length}`);
        }

        let result = [];
        for (let i = 0; i < a.length; i++) {
            result.push(a[i] ^ b[i]);
        }
        return result;
    }
}


let msg = '0123456789abcdef_AAA'
let cipherAES = new CipherAES(get_session_key(256))
let encode = cipherAES.encrypt(msg)
let decode = cipherAES.decrypt(encode)

if (JSON.stringify(msg) != JSON.stringify(decode)) {
    throw Error('assert faild')
}