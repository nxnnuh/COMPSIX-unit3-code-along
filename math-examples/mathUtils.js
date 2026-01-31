function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) { 
    if (b === 0) { 
        return "Cannot divide by zero"; 
    } 
    return a / b; 
}

function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}


console.log("testing calc functions: ");
console.log("5 + 3 =", add(5,3));
console.log("10 - 3 = ", subtract(10,3));
console.log("4 x 7 = ", multiply(4,7));
console.log("10 / 2 = ", divide(10,2));
console.log("10 / 0 = ", divide(10,0));

module.exports = {
    add,
    subtract,
    multiply,
	divide,
    calculateAverage
};