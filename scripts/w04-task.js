/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Prince Eli Ahiamatah",
    photo:"images/myself.png",
    favoriteFoods: ["Waakye", "Banku", "Okro Soup", "Nigerian Vegetable Soup"],
    hobbies: ["Designing Websites", "Video Editing", "Photo Editing", "Content Creation", "Digital Marketing"],
    placeLived: [],

};

myProfile.placeLived.push(
    {
        place: "New Edubiase, Ghana",
        length: '3 years'
    }
);




/* Populate Profile Object with placesLive objects */


/* DOM Manipulation - Output */

/* Name */
document.getElementById("name").innerHTML = myProfile.name;
/* Photo with attributes */
document.querySelector('img').setAttribute('src', myProfile.photo);

document.querySelector('img').setAttribute('alt', 'Profile image of[Prince Eli Ahiamatah]');

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */


let dt = document.createElement('dt');
dt.textContent = myProfile.placeLived;
document.querySelector('#places-lived').appendChild(dt);
