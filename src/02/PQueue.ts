export class PQueue<T> {
    private pQueue: Record<number, Array<T>>;
    private countPriorites: number;

    constructor(countPriorites: number) {
        this.pQueue = {};
        this.countPriorites = countPriorites;
    }

    addTask(value: T, priority: number): void {
        if (priority > this.countPriorites) {
            return;
        }

        if (!this.pQueue[priority]) {
            this.pQueue[priority] = [value];
            return;
        }

        this.pQueue[priority].push(value);
    }

    getTask(): T | null {
        const queuesKeys = Object.keys(this.pQueue);

        for (let i = 0; i < queuesKeys.length; i++) {
            const key = queuesKeys[i];

            if (!this.pQueue[key].length) {
                continue;
            }

            const value = this.pQueue[key][0];
            this.pQueue[key] = this.pQueue[key].slice(1);

            return value;
        }

        return null;
    }
}
