/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name : "Prince Eli Ahiamatah",
    photo: "images/profile-picture.jpg",
    favoriteFoods: ['Mango', 'Banana', 'Pineapple', 'Pawpaw'],
    hobbies: ['Playing Piano', 'Photography', 'Videography', 'Music', 'Creative Arts'],
    placesLived: [],
}



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'SaltLake City, Utah',
        length: '5 years'
    },
    {
        place: 'Canada',
        length: '3 years'
    },
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('img').setAttribute('src', myProfile.photo);
document.querySelector('img').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
function food(element){
    let li = document.createElement('li');
    li.textContent = element
    document.querySelector('#favorite-foods').appendChild(li);
}

myProfile.favoriteFoods.forEach(food);


/* Hobbies List */

function hobby(element){
    let list = document.createElement('li');
    list.textContent = element
    document.querySelector('#hobbies').appendChild(list);
}

myProfile.hobbies.forEach(hobby);

/* Places Lived DataList */

const placesLivedElement = document.getElementById('places-lived');

myProfile.placesLived.forEach(element => {
  const dt = document.createElement('dt');
  dt.textContent = element.place;

  const dd = document.createElement('dd');
  dd.textContent = element.length;

  placesLivedElement.appendChild(dt);
  placesLivedElement.appendChild(dd);
});

/* Places Lived DataList */
/* without arrow function */

// const placesLivedElement = document.getElementById('places-lived');

// myProfile.placesLived.forEach(function(place) {
//   const dt = document.createElement('dt');
//   dt.textContent = place.place;

//   const dd = document.createElement('dd');
//   dd.textContent = place.length;

//   placesLivedElement.appendChild(dt);
//   placesLivedElement.appendChild(dd);
// });