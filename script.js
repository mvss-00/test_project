"use strict"

function fib(int) {
    if (int <= 0 || typeof(int) !== 'number' || !Number.isInteger(int)) {
        return '';
    }

    let first = 0;
    let second = 1;
    let result = '';

    for (let i = 0; i < int; i++) {
        if (i + 1 === int) {
            result += `${first}`
        } else {
            result += `${first} `
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

console.log(fib(6));
