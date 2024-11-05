/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Prince Eli Ahiamatah';

let date = new Date();
let currentYear = date.getFullYear(); 

const profilePicture = "images/profile-picture.jpg"


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');

const foodElement = document.getElementById('food');

const yearElement = document.querySelector('#year');

let imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */

//Declare an array variable to hold your favorite foods
let favoriteFoodArray = ['Banku', 'Okro', 'Waakye'];


//Modify the HTML element with the id of food to display your favorite foods array. 💡Remember that you set a variable named foodElement to reference the element with the id of food.
foodElement.innerHTML = favoriteFoodArray;

// Declare and instantiate a variable to hold another single favorite food item
const newFoodItem = 'Pizza';


//Add the value stored in this new variable to your favorite food array
favoriteFoodArray.push(newFoodItem);

//Append the new array values onto the displayed content of the HTML element with the id of food using a += operator and a <br> (line break character) to provide a line break
foodElement.innerHTML += `<br>${favoriteFoodArray}`;

// full version of above code
/* 
favoriteFoodArray.forEach(function(food) {
    // Create a new line break element
    let lineBreak = document.createElement("br");
    // Create a new text node with the food item
    let foodText = document.createTextNode(food);
    // Append the line break and food text to foodElement
    foodElement.appendChild(lineBreak);
    foodElement.appendChild(foodText);
});
*/

//Remove the first element in the favorite food array.
favoriteFoodArray.shift();

//Again, append the array output showing the modified array, using a line break
foodElement.innerHTML += `<br>${favoriteFoodArray}`;

//Remove the last element in the favorite food array
favoriteFoodArray.pop();

////Again, append the array output showing the modified array, using a line break
foodElement.innerHTML += `<br>${favoriteFoodArray}`;


