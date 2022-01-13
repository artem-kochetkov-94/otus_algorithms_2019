declare global {
    interface Array<T> {
        pushToIndex(i: number, element: any): any[];
    }
}

if (!Array.prototype.pushToIndex) {
    Array.prototype.pushToIndex = function(index: number, element: any): any[] {
        const thisCopy = this.slice();
        this[this.length] = this.length + 1;

        for (let i = index + 1; i < this.length; i++) {
            this[i] = thisCopy[i - 1];
        }

        if (index > this.length) {
            this[thisCopy.length] = element
        } else {
            this[index] = element;
        }

        return this;
    };
}

export {};