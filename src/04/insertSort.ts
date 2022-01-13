export function insertSort(numbers: number[]): number[] {
    const copyNumbers = numbers.slice();

    let temp = null;
    let resultNumbers = [copyNumbers[0]];

    for (let i = 1; i < copyNumbers.length; i++) {
        temp = copyNumbers[i];

        // пойдем от последнего элемента в отсортированном массиве
        for (let j = resultNumbers.length - 1; j >= 0; j--) {
            // если наш текущий элемент больше, чем по индексу, то его ставим в конец
            if (temp > resultNumbers[j]) {
                resultNumbers[j + 1] = temp;
                break;
            // если наш текущий элемент меньше, чем по индексу, то двигаем элементы
            } else {
                resultNumbers[j + 1] = resultNumbers[j];

                // если последний, просто меняем местами
                if (j === 0) {
                    resultNumbers[j] = temp;
                }
            }
        }
    }

    return resultNumbers;
};
