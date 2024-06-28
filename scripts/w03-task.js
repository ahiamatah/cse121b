/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
const addButton = document.querySelector('#addNumbers');

function add(){
    let number1 = Number(document.getElementById("add1").value);

    let number2 = Number(document.getElementById("add2").value);

    let addNumbers = number1 + number2;

    let answer = document.querySelector('#sum');
    answer.value = addNumbers;
}

addButton.addEventListener('click', add);

/* Function Expression - Subtract Numbers */
const subtractButton = document.querySelector('#subtractNumbers');

function difference () {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);

    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    let subtractNumbers = subtractNumber1 - subtractNumber2;

    let differenceOutput = document.querySelector('#difference');
    differenceOutput.value = subtractNumbers;
    
}

subtractButton.addEventListener('click', difference);

/* Arrow Function - Multiply Numbers */

const multiplicationButtton = document.querySelector('#multiplyNumbers');

const product = () => {
    let multiplicationNumber1 = Number(document.querySelector('#factor1').value);

    let multiplicationNumber2 = Number(document.querySelector('#factor2').value);

    let multipluNumbers = multiplicationNumber1 * multiplicationNumber2;

    let productOutput = document.querySelector('#product');

    productOutput.value = multipluNumbers;
}

multiplicationButtton.addEventListener('click', product);

/* Open Function Use - Divide Numbers */

const divisionButton = document.querySelector('#divideNumbers');

function quotient (){
    let divisor = Number(document.querySelector('#divisor').value);

    let dividend = Number(document.querySelector('#dividend').value);

    let division = (dividend/divisor).toFixed(2);

    let quotientOutput = document.querySelector('#quotient');

    quotientOutput.value = division;
}

divisionButton.addEventListener('click', quotient);

/* Decision Structure */

const totalButton = document.querySelector('#getTotal');

function totalCalculation () {
    let subTotal = Number(document.querySelector('#subtotal').value);
    let member = document.querySelector('#member');
    let totalDue;
    let total = document.querySelector('#total');;
    if (member.checked){
        let discount = subTotal * 0.2
        totalDue = subTotal - discount;
        total.innerHTML = `$${totalDue.toFixed(2)}`;
    }
    else{
        total.innerHTML = `$${subTotal.toFixed(2)}`;
    }
}

totalButton.addEventListener('click', totalCalculation);


/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */
function isOdd (number){
    return number % 2 !== 0;
};

let oddNumbers;
oddNumbers = numbersArray.filter(isOdd);

let odds = document.querySelector('#odds');
odds.innerHTML = oddNumbers;

/* Output Evens Only Array */
function isEven (number){
    return number % 2 === 0;
};

let evenNumbers = numbersArray.filter(isEven);

let evens = document.querySelector('#evens');
evens.innerHTML = evenNumbers;

/* Output Sum of Org. Array */
function add1(firstNumber, nextNunber){
    return firstNumber + nextNunber;
}

let sum;
sum = numbersArray.reduce(add1);

let sumOfArray = document.querySelector('#sumOfArray');

sumOfArray.innerHTML = sum;


/* Output Multiplied by 2 Array */
function multiply(number){
    return number * 2;
}

let multiplication;
multiplication = numbersArray.map(multiply);

let multiplied = document.querySelector('#multiplied');

multiplied.innerHTML = multiplication;

/* Output Sum of Multiplied by 2 Array */

function add2 (number, nextNunber){
    return number + nextNunber;
}

let newArray = multiplication;

let sum2;
sum2 = newArray.reduce(add2);

let sumOfMultiplied = document.querySelector('#sumOfMultiplied');

sumOfMultiplied.innerHTML = sum2;


