import {fib} from './fib_matrix';

test('test fib', () => {
    let numbers0 = [0];
    let numbers1 = [0, 1];
    let numbers2 = [0, 1, 1];
    let numbers10 = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];

    expect(fib(0)).toMatchObject(numbers0);
    expect(fib(1)).toMatchObject(numbers1);
    expect(fib(2)).toMatchObject(numbers2);
    expect(fib(10)).toMatchObject(numbers10);
});
