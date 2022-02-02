const CRC32 = require("crc-32");

type List = {
    [key: string]: string;
}

export class HashTable {
    internal: Array<List>;

    constructor() {
        this.internal = [];
    }

    insert(key: string, value: string) {
        const hash = CRC32.str(key);
        const index = Math.abs(hash) % 1000;

        this.internal[index]
            ? this.internal[index][key] = value
            : this.internal[index] = {
                [key]: value,
            };
    }

    get(key: string) {
        const hash = CRC32.str(key);
        const index = Math.abs(hash) % 1000;

        return [key, this.internal[index][key]];
    }
}
