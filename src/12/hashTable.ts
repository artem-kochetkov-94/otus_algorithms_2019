const CRC32 = require("crc-32");

type List = {
    data: string[];
    next?: List;
}

export class HashTable {
    internal: Array<List>;

    constructor() {
        this.internal = [];
    }

    insert(key: string, value: string) {
        const hash = CRC32.str(key);
        const index = Math.abs(hash) % 1000;

        if (!this.internal[index]) {
            this.internal[index] = {
                data: [key, value],
            };

            return;
        }

        // при повторном индексе добавляем элементы в список
        this.insertInList(this.internal[index], key, value);
        console.log('this.internal', this.internal);
    }

    insertInList(list: List, key: string, value: string) {
        // в случае если ключи совпадают - переписываем значение
        if (list.data[0] === key) {
            list.data[1] = value;
            return;
        }

        if (!list.next) {
            list.next = {
                data: [key, value],
            }

            return;
        }

        this.insertInList(list.next, key, value);
    }

    get(key: string) {
        const hash = CRC32.str(key);
        const index = Math.abs(hash) % 1000;

        return this.findItem(this.internal[index], key);
    }

    findItem(list, key) {
        if (list.data[0] === key) {
            return list.data;
        }

        return this.findItem(list.next, key);
    }
}

const hashTable = new HashTable();