// console.log(buttonAuth);
// console.log(document);

// function sayMeow() {
//     console.log('Meow');
// }


// const sayMeow = function() {
//     console.log("Meow");
// };

// const sayMeow = () => {
//     console.log("Meow");
// };

// sayMeow();
// sayMeow();
// sayMeow();

// const obj = {
//     name: 'Alex',
//     age: 34,
//     sayHello: function() {
//         console.log('Привет, мены зовут Alex');
//     }
// };
// console.log(obj.name);
// console.log(obj.age);
// obj.sayHello();

// const arr = [1, 2, 3, 4, 5];
// console.log(arr[2]);

// const counter = (a, b) => {
//     return a + b;
// };
// console.log(counter(2, 3));
// console.log(counter(5, 7));
// console.log(counter(6, 8));

const buttonAuth = document.querySelector(".button-auth");
const modalAuth = document.querySelector(".modal-auth");
const buttonOut = document.querySelector('.button-out');
const userName = document.querySelector('.user-name');
const closeAuth = document.querySelector('.close-auth');
// const logInForm = document.querySelector('#logInForm');
const logInForm = document.getElementById("logInForm");
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById("password");

// console.log(buttonOut);
// console.log(userName);


const login = (user) => {
    // console.log(user);
    buttonAuth.style.display = 'none';

    buttonOut.style.display = "flex";
    userName.style.display = "flex";

    userName.textContent = user.login;
    modalAuth.style.display = "none";
};

const logout = () => {
    buttonAuth.style.display = "flex";

    buttonOut.style.display = "none";
    userName.style.display = "none";
    userName.textContent = '';

    localStorage.removeItem('user');
};

// console.log(inputLogin);
// console.log(inputPassword);
// console.log(modalAuth);
// modalAuth.style.color = 'red';


buttonAuth.addEventListener('click', () => {
    // console.dir(modalAuth);
    modalAuth.style.display = 'flex';
});

closeAuth.addEventListener("click", () => {
    modalAuth.style.display = "none";
});


buttonOut.addEventListener("click", () => {
    logout();
});


// console.log(logInForm);
logInForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.dir(event);
    // console.log('auth');
    // console.dir(inputLogin);
    // console.log(inputLogin.value);
    // console.log(inputPassword.value);

    const user = {
        login: inputLogin.value,
        password: inputPassword.value
    };

    localStorage.setItem('user', JSON.stringify(user));
    login(user);
});

if (localStorage.getItem('user')) {
    // console.log(localStorage.getItem("user"));
    // console.log(JSON.parse(localStorage.getItem("user")));
    login(JSON.parse(localStorage.getItem("user")));
}