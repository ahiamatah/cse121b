/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
let number1;
let number2;

document.getElementById("addNumbers").onclick = function()
{
    number1 = document.getElementById("add1").value;
    number2 = document.getElementById("add2").value;

    let addNumber1 = parseInt(number1);
    let addNumber2 = parseInt(number2);

    add =  addNumber1 + addNumber2;

    document.getElementById("sum").value = add;
    
}


/* Function Expression - Subtract Numbers */

let subNum1;
let subNum2;

document.getElementById("subtractNumbers").onclick = function()
{
    subNum1 = document.getElementById("subtract1").value;
    subNum2 = document.getElementById("subtract2").value;

    let subNumber1 = parseInt(subNum1);
    let subNumber2 = parseInt(subNum2);

    difference =  subNumber1 - subNumber2;
    
    document.getElementById("difference").value = difference;
    
}


/* Arrow Function - Multiply Numbers */

let fac1;
let fac2;

document.getElementById("multiplyNumbers").onclick = function()
{
    fac1 = document.getElementById("factor1").value;
    fac2 = document.getElementById("factor2").value;

    let factor1 = parseInt(fac1);
    let factor2 = parseInt(fac2);

    product =  factor1 * factor2;
    
    document.getElementById("product").value = product;
    
}
/* Open Function Use - Divide Numbers */
/* Decision Structure */
let divid;
let divis;

document.getElementById("divideNumbers").onclick = function()
{
    divid = document.getElementById("dividend").value;
    divis = document.getElementById("divisor").value;

    let dividend = parseInt(divid);
    let divisor = parseInt(divis);

    quotient =  dividend / divisor;
    
    document.getElementById("quotient").value = quotient;
    
}

/* Selection Structure */

let discount;
let totalSpan;
let discountAmont;

let checkbox = document.getElementById("member");

document.getElementById("getTotal").onclick = function()
{
    let sub = document.getElementById("subtotal").value;
    let subtotal = parseInt(sub);
    
    if (checkbox.checked != true)
    {
        totalSpan = subtotal;
    }
    else
    {
        discount = 0.2;
        discountAmont = subtotal * discount;
        totalSpan = subtotal - discountAmont;
    }

    document.getElementById("total").textContent = `$ ${totalSpan.toFixed(2)}`;
};



/* ARRAY METHODS - Functional Programming */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
/* Output Source Array */
document.getElementById("array").textContent = numbersArray;
let odd;

/* Output Odds Only Array */
function isOdd (num)
{
    for (let i = 2; num >i; i++)
    {
        if (num/i == 1)
        {return false}
        else
        {
            return num;
        }
    }
}

odd = numbersArray.filter(isOdd);
/* adding 1 at the beginning of array */
odd.unshift(1);
/* Output Evens Only Array */
document.getElementById("odds").innerHTML = odd;

/* Even numbers */

let even;

function isEven (num)
{
    for ( j = -2; num > j; j++)
    {
        if (num%j == 1)
        {
            return false;
        }
        else
        {
            return num;
        }
    }
}

even = numbersArray.filter(isEven);

document.getElementById("evens").innerHTML = even;

/* Multiply num */
let multiplymap = numbersArray.map((x) => x * 2);
/* Output Sum of Org. Array */
let sumArray = numbersArray.reduce((accumuator, currentValue, ) => accumuator + currentValue, 0);

document.getElementById("sumOfArray").innerHTML = sumArray;

/* Output Multiplied by 2 Array */
document.getElementById("multiplied").innerHTML = multiplymap;
/* Output Sum of Multiplied by 2 Array */

let array2 = multiplymap;
let sumArray2 = array2.reduce((accumuator, currentValue, ) => accumuator + currentValue, 0);

document.getElementById("sumOfMultiplied").innerHTML = sumArray2;