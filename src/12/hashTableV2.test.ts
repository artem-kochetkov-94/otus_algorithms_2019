import {HashTable} from './hashTableV2';

test('test hashTable корректно добавляет, изымает данные', () => {
    const hashTable = new HashTable();

    hashTable.insert('key', 'value');

    expect(hashTable.get('key')).toMatchObject(['key', 'value']);
});

test('test hashTable при добавление повторяющего ключа, перезаписывает значение', () => {
    const hashTable = new HashTable();

    hashTable.insert('key', 'value');
    hashTable.insert('key', 'value_new');

    hashTable.insert('aaaaa0.0585754039730588', 'value');
    hashTable.insert('aaaaa0.0585754039730588', 'value_new');

    expect(hashTable.get('key')).toMatchObject(['key', 'value_new']);
    expect(hashTable.get('aaaaa0.0585754039730588')).toMatchObject(['aaaaa0.0585754039730588', 'value_new']);
});
