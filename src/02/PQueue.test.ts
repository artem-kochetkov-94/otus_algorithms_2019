import { PQueue } from './PQueue';

test('Задачи корректно беруться из очереди', () => {
    const pQueue = new PQueue(5);

    const task1 = 'task 1';
    const task2 = 'task 2';
    const task3 = 'task 3';
    const task4 = 'task 4';

    pQueue.addTask(task3, 2);
    pQueue.addTask(task4, 5);
    pQueue.addTask(task1, 1);
    pQueue.addTask(task2, 1);

    expect(pQueue.getTask()).toEqual(task1);
    expect(pQueue.getTask()).toEqual(task2);
    expect(pQueue.getTask()).toEqual(task3);
    expect(pQueue.getTask()).toEqual(task4);
    expect(pQueue.getTask()).toEqual(null);
})
