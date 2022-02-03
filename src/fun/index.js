// Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.
{
    Number.prototype.plus = function(x) {
        return this + x;
    };

    Number.prototype.minus = function(x) {
        return this - x;
    };

    console.log('expected 4, ', (2).plus(3).minus(1));
}

// Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c', реализуйте ее так, что бы она вернула строку '1*b*1c'.
{
    function f(...args) {
        return args.slice(1).join(args[0]);
    }

    const test = f('*', '1', 'b', '1c');
    console.log('1*b*1c, ', test);
}

// Даны два массива: [1, 2, 3, 2, 0] и [5, 1, 2, 7, 3, 2]
// Надо вернуть [1, 2, 2, 3] (порядок неважен)
{
    function filter(arr1, arr2) {
        let result = [];

        for (let i = 0; i < arr1.length; i++) {
            const sameValueIndex = arr2.findIndex(item => item === arr1[i]);

            if (sameValueIndex < 0) {
                continue;
            }

            result.push(arr1[i]);
            arr2[sameValueIndex] = undefined;
        }

        return result;
    }

    const test = filter([1, 2, 3, 2, 0], [5, 1, 2, 7, 3, 2]);
    console.log('test', test);
}

// Дана строка (возможно, пустая), состоящая из букв A-Z: AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB
// Нужно написать функцию RLE, которая на выходе даст строку вида: A4B3C2XYZD4E3F3A6B28
// И сгенерирует ошибку, если на вход пришла невалидная строка.
// Пояснения: Если символ встречается 1 раз, он остается без изменений; Если символ повторяется более 1 раза, к нему добавляется количество повторений.

{
    function RLE(str) {
        if (typeof str !== 'string' || !str.length) {
            throw new Error('Не пройдешь!');
        }

        let result = str[0];
        let currentChar = '';
        let count = 1;

        for (let i = 1; i < str.length; i++) {
            currentChar = str[i];
            if (str[i - 1] === currentChar) {
                count += 1;
                continue;
            }

            if (count > 1) {
                result += count;
            }

            count = 1;
            result += currentChar;
        }

        if (count > 1) {
            result += count;
        }

        return result;
    }

    const test = RLE('AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB');
    console.log('test', test);
}