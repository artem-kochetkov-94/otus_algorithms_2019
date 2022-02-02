const CRC32 = require("crc-32");

class HashTable {
    internal: Array<string[]>;

    constructor() {
        this.internal = [];
    }

    insert(key: string, value: string) {
        const hash = CRC32.str(key);
        const index = Math.abs(hash) % 1000;

        console.log('hash', hash);
        console.log('index', index);

        this.internal[index] = [key, value];
    }

    get(key: string) {
        const hash = CRC32.str(key);
        const index = Math.abs(hash) % 1000;

        console.log('this.internal[index]', this.internal[index]);

        return this.internal[index];
    }
}



const hashTable = new HashTable();

hashTable.insert('key1', 'value1');
hashTable.insert('key2', 'value2');
hashTable.get('key2');
