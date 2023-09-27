/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = "Prince Eli Ahiamatah";
let currentYear = "2023";
let profilePicture ="images/myself.png"


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElemet = document.querySelector('#year');
const imageElement = document.querySelector('img');




/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElemet.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', 'Profile image of[Prince Eli Ahiamatah]');






/* Step 5 - Array */

favFoods = ['Waakye', 'Banku and Okro Stew', 'Moimoi'];
foodElement.innerHTML += `<br>${favFoods}`;
newFoodItem = 'Tilapia'
favFoods.push(newFoodItem)
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;




