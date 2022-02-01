import {insertSort} from "./insertSort";

function shellSort(_numbers: number[]): number[] {
    let numbers = _numbers.slice();

    let tempArr = [];
    let half = Number(numbers.length / 2);

    for (let n = half; n > 0; n--) {
        tempArr = [];

        // формируем все массивы
        for (let i = 0; i < n; i++) {
            tempArr[i] = [];

            for (let j = i; j < numbers.length; j++) {
                if ((j + n - i) % n === 0) {
                    tempArr[i].push(numbers[j]);
                }
            }
        }

        // сортируем методом вставки
        for (let i = 0; i < tempArr.length; i++) {
            tempArr[i] = insertSort(tempArr[i]);
        }

        numbers = tempArr.flat();
    }

    return numbers;
}

shellSort([4, 27, 51, 14, 31, 42, 1, 8, 24, 3, 59, 33, 44, 53, 16, 10, 38, 50, 21, 36]);