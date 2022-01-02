Array.prototype.pushToIndex = function (index, element) {
    const thisCopy = this.slice();
    this[this.length] = this.length + 1;

    for (let i = index + 1; i < this.length; i++) {
        this[i] = thisCopy[i - 1];
    }

    this[index] = element;

    return this;
};
