Array.prototype.pushToIndex = function (index, element) {
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

export const lala = 3;