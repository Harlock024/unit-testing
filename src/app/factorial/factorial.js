"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.factorial = factorial;
function factorial(x) {
    if (x < 0 || x > 15)
        return 0;
    if (x === 0)
        return 1;
    return x * factorial(x - 1);
}
