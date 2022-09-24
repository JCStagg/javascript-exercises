const sumAll = function(firstNumber, secondNumber) {
    if ((typeof(firstNumber) != typeof(1)) || typeof(secondNumber) != typeof(1)) {
        return 'ERROR';
    } else if (firstNumber < 0 || secondNumber < 0) {
        return 'ERROR';
    };

    let lowNumber = firstNumber;
    let highNumber = secondNumber;

    if (firstNumber < secondNumber) {
        lowNumber = firstNumber;
        highNumber = secondNumber;
    } else if (firstNumber > secondNumber) {
        lowNumber = secondNumber;
        highNumber = firstNumber;
    }
    
    let sum = 0;

    for (let i = lowNumber; i <=highNumber; i++) {
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
