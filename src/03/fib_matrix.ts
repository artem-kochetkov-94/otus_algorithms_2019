type Matrix = Array<number[]>;

export function fib(n: number): number[] {
    if (n === 0) {
        return [0];
    }

    const a: Matrix = [
        [1,1],
        [1,0]
    ];

    let numbers = [0, 1];
    let tempMatrix: Matrix = a;

    for (let i = 0; i < n - 1; i++) {
        tempMatrix = mulMatrix(tempMatrix, a);
        numbers.push(tempMatrix[0][1]);
    }

    return numbers;
}

const mulMatrix = (a: Matrix, b: Matrix): Matrix => {
    const result = [
        [a[0][0] * b[0][0] + a[0][1] * b[1][0], a[0][0] * b[0][1] + a[0][1] * b[1][1]],
        [a[1][0] * b[0][0] + a[1][1] * b[1][0], a[1][0] * b[0][1] + a[1][1] * b[1][1]]
    ];

    return result;
}
