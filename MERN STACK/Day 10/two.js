// calculator.js

const math = require('./math');

function calculateTotal(price, quantity) {
    return math.multiply(price, quantity);
}

function calculateSum(a, b) {
    return math.add(a, b);
}

module.exports = { calculateTotal, calculateSum };