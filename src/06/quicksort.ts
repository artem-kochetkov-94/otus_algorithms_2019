export function quickSort(arr: number[]): number[] {
    const left = [];
    const right = [];

    if (arr.length < 2) {
        return arr;
    }

    const n = Math.floor(arr.length / 2);

    for (let i = 0; i < n; i++) {
        if (arr[i] < arr[n]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    for (let i = n + 1; i < arr.length; i++) {
        if (arr[i] < arr[n]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), arr[n], ...quickSort(right)];
}

quickSort([3, 6, 1, 2, 9, 11, 13, 4, 6, 23, 2]);