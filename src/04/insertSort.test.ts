import {insertSort} from './insertSort';

test('test sort', () => {
    const arr1 = [0, 1];
    const arr2 = [1, 0];
    const arr3 = [1, 1];
    const arr4 = [1];
    const arr5 = [2, 6, 5, 12, 2, 3, 8, 13, 7, 1, 11, 16, 10, 14, 15, 9];

    expect(insertSort(arr1)).toMatchObject([0, 1]);
    expect(insertSort(arr2)).toMatchObject([0, 1]);
    expect(insertSort(arr3)).toMatchObject([1, 1]);
    expect(insertSort(arr4)).toMatchObject([1]);
    expect(insertSort(arr5)).toMatchObject([1, 2, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
});
