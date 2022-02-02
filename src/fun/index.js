// Реализовать методы, которые в процессе выполнения строки (2).plus(3).minus(1) дали бы на выходе 4.
{
    Number.prototype.plus = function(x) {
        return this + x;
    };

    Number.prototype.minus = function(x) {
        return this - x;
    };

    console.log('expected 4, ', (2).plus(3).minus(1));
}

// Дана функция, она принимает в качестве аргументов строки '*', '1', 'b', '1c', реализуйте ее так, что бы она вернула строку '1*b*1c'.
{
    function f(...args) {
        return args.slice(1).join(args[0]);
    }

    const test = f('*', '1', 'b', '1c');
    console.log('1*b*1c, ', test);
}

