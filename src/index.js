import css from './css/main.css';
import 'regenerator-runtime/runtime';
//html elements to set
const photo = document.querySelector('.photo');
const name = document.querySelector('.name');
const profession = document.querySelector('.profession');
const comments = document.querySelector('.comments');
//buttons elements
const btnRight = document.querySelector('.fa-angle-right');
const btnLeft = document.querySelector('.fa-angle-left');
const btnRandom = document.querySelector('.random');

const url = '../src/data/users.json'; //End point
let currentUser = 0; //Set user

//Getting data from users.json
const getData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
}

//Returning data from json
getData()
    .then(data => {
        showUser(data);
        addEventBtn(data);
    })
    .catch(err => console.log(err));

//Show values in the screen
const showUser = (dataUser) => {
    const item = dataUser[currentUser];
    photo.src = item.profile;
    name.textContent = item.name;
    profession.textContent = item.profession;
    comments.textContent = item.comment;
}

//Create event listener for buttons
const addEventBtn = (data) => {
    //next user
    btnRight.addEventListener('click', () => {
        currentUser++;
        if (currentUser > data.length - 1) {
            currentUser = 0;
        }
        showUser(data);
    });
    //Prev user
    btnLeft.addEventListener('click', () => {
        currentUser--;
        if (currentUser < 0) {
            currentUser = data.length - 1;
        }
        showUser(data);
    });
    //Random User
    btnRandom.addEventListener('click', () => {
        currentUser = Math.floor(Math.random() * data.length);
        showUser(data);
    });

};