const inputNumber = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');


convertButton.addEventListener('click', () => {
    const numberValue = Number(inputNumber.value);
    
    if (!inputNumber.value || isNaN(numberValue) ||
        !Number.isInteger(numberValue)) {
        showMessage('Please enter a valid number');
    } else if (numberValue <= -1) {
        showMessage('Please enter a number greater than or equal to 1');
    } else if (numberValue > 3999) {
        showMessage('Please enter a number less than or equal to 3999');
    } else {
        const result =  decimalToRoman(numberValue);
        output.innerText = result;
    }

    inputNumber.value = '';

    
});


function showMessage(message) {
    output.innerText = message;
}

function decimalToRoman(number) {
    const romans = [
        {value: 1000, symbol: 'M'},
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';

    for (let index = 0; index < romans.length; index++) {
        while (number >= romans[index].value) {
            result += romans[index].symbol;
            number -= romans[index].value;
        }
    }

    return result;
}
