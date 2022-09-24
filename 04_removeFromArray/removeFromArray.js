let testArray = [1, 2, 3, 4, 5, 6];

const removeFromArray = function(array) {
    let output = [];
    for (item in array) {
        let removeTest = '';
        for (argument in arguments) {
            if (parseInt(argument)===0) {
                continue;
            };
            if (arguments[argument] === array[item]) {
                removeTest = 'Fail';
                break;
            };
        };
        if (removeTest != 'Fail') {
            output.push(array[item]);
        };
    };
    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
