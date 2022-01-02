import './IArray';

const NEW_ITEM = 'this is string';

test('В начало', () => {
    let array = [1, 2, 3, 4, 5];

    expect(array.pushToIndex(0, NEW_ITEM)).toMatchObject([NEW_ITEM, 1, 2, 3, 4, 5]);
})

test('В конец', () => {
    let array = [1, 2, 3, 4, 5];

    expect(array.pushToIndex(5, NEW_ITEM)).toMatchObject([1, 2, 3, 4, 5, NEW_ITEM]);
})

test('В конец', () => {
    let array = [1, 2, 3, 4, 5];

    expect(array.pushToIndex(10, NEW_ITEM)).toMatchObject([1, 2, 3, 4, 5, NEW_ITEM]);
})

test('В центр', () => {
    let array = [1, 2, 3, 4, 5];

    expect(array.pushToIndex(2, NEW_ITEM)).toMatchObject([1, 2, NEW_ITEM, 3, 4, 5]);
})