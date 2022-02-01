function heapsort(arr: number[]): number[] {
    // Построение кучи
    for (let i = arr.length / 2 - 1; i >= 0; i--) {
        heapify(arr, i, arr.length);
    }

    // Один за другим извлекаем элементы из кучи
    for (let i = arr.length - 1; i >= 0; i--) {
        // Перемещаем текущий корень в конец
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // вызываем процедуру heapify на уменьшенной куче
        heapify(arr, 0, i);
    }

    return arr;
}

function heapify(arr: number[], currentIndex = 0, n: number) {
    let largest = currentIndex;
    // Инициализируем наибольший элемент как корень
    const left = 2 * currentIndex + 1; // left = 2*i + 1
    const right = 2 * currentIndex + 2; // right = 2*i + 2

    // Если левый дочерний элемент больше корня
    if (left < n && arr[left] > arr[largest])
        largest = left;

    // Если правый дочерний элемент больше, чем самый большой элемент на данный момент
    if (right < n && arr[right] > arr[largest])
        largest = right;

    // Если самый большой элемент не корень
    if (largest != currentIndex) {
        const temp = arr[currentIndex];
        arr[currentIndex] = arr[largest];
        arr[largest] = temp;

        // Рекурсивно преобразуем в двоичную кучу затронутое поддерево
        heapify(arr, largest, n);
    }

    return arr;
}

heapsort([5, 7, 2, 9, 11, 12, 3, 1, 4, 8, 6, 10]);