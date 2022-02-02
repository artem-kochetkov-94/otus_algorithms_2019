export function quickSort(arr: number[]): number[] {
    const left = [];
    const right = [];

    if (arr.length < 2) {
        return arr;
    }

    const n = Math.floor(arr.length / 2);
    for (let i = 0; i < arr.length; i++) {
        if (i === n) {
            continue;
        }

        if (arr[i] < arr[n]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), arr[n], ...quickSort(right)];
}

console.log(quickSort([3, 6, 1, 2, 9, 11, 13, 4, 6, 23, 2]));