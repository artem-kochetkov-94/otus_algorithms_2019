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

// Дан список интов, повторяющихся элементов в списке нет. Нужно преобразовать это множество в строку, сворачивая соседние по числовому ряду числа в диапазоны. Примеры:
// [1,4,5,2,3,9,8,11,0] => "0-5,8-9,11"
// [1,4,3,2] => "1-4"
// [1,4] => "1,4"
{
    function wtf(_arr) {
        let arr = _arr.sort((a,b) => a - b);
        let result = '';

        const groups = [];
        let start = null;
        let end = null;

        for (let i = 0; i < arr.length; i++) {
            // первым делом проверим есть ли элемент в предыдущих диапазонах

            // если нет начала - задаем
            if (start === null) {
                start = arr[i];
                continue;
            }

            // если нет конца - задаем
            if (end === null) {
                if (arr[i] < start) {
                    end = start;
                    start = arr[i];
                } else {
                    end = arr[i];
                }

                continue;
            }

            if (arr[i] === start || arr[i] === end) {
                continue;
            }

            // если текущий элемент внутри диапазана
            if (arr[i] > start && arr[i] < end) {
                continue;
            }

            // если текущий элемент меньше на 1 минимального - задаем новый start
            if (start - arr[i] === 1) {
                start = arr[i];
                continue;
            }

            // если текущий элемент больше на 1 максимального - задаем новый end
            if (arr[i] - end === 1) {
                end = arr[i];
                continue;
            }

            // если текущий элемент не входит в диапазон (больше него) - формируем группу из предыдущих отрезков
            groups.push([start, end]);
            start = arr[i];
            end = null;
            continue;
        }

        groups.push([start, end]);

        groups.forEach((group, index) => {
            if (group[1] === null) {
                result += group[0];
            } else {
                result += group.join('-');
            }

            if (index !== groups.length - 1) {
                result += ',';
            }
        })

        return result;
    }

    const test1 = wtf([1, 4, 5, 2, 3, 9, 8, 11, 0]);
    const test2 = wtf([1, 4, 3, 2]);
    const test3 = wtf([1, 4]);

    console.log('test1', test1);
    console.log('test2', test2);
    console.log('test3', test3);
}

// Дан массив из нулей и единиц. Нужно определить, какой максимальный по длине подинтервал единиц можно получить, удалив ровно один элемент массива.
// [1, 1, 0]
{
    function f(arr) {
        let subranges = [];

        let count = 1;
        let max = 0;
        let currentValue = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (currentValue === arr[i]) {
                count += 1;

                if (i === arr.length - 1) {
                    subranges.push([currentValue, count]);
                }

                continue;
            }

            subranges.push([currentValue, count]);
            currentValue = arr[i];
            count = 1;

            let lastIndex = subranges.length - 1;

            if (currentValue === 1) {
                max = Math.max(max, subranges[lastIndex][1]);
            } else if (subranges[lastIndex - 1] && subranges[lastIndex - 1][1] === 1) {
                // если в предыдущей последовательности 1 ноль
                let prevNumbersCount = subranges[lastIndex - 2] ? subranges[lastIndex - 2][1] : 0;
                max = Math.max(max, subranges[lastIndex][1] + prevNumbersCount);
            }
        }

        return max;
    }

    const test = f([0, 0, 1, 1, 0, 1, 1, 0]);
    console.log('test', test);
}