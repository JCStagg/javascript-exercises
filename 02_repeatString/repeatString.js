const repeatString = function(string, repeats = 0) {
    if (repeats < 0) {
        return 'ERROR';
    }
    
    let output = '';

    for (let i = 0; i<repeats; i++) {
        output += string;
    };

    return output;
};

// Do not edit below this line
module.exports = repeatString;
