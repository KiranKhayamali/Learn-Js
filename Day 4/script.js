const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
    const name = prompt("What is your name ?"); // helps to take input from user in website on pop up form  
    alert(`Hello ${name}, nice to meet you!`); // shows result in pop up form instead of text in web like textContent do 
    headingA.textContent = (`Welcome ${name}`);
};

//Declaring and intializing variables
const myname = "Kiran"; // String and comstant
let myage = 22; // numbers 
let iAmAlive = true; // boolean
let myNameArray = ["Chris", "Bob", "Jim"]; // Arrays for strings
let myNumberArray = [10, 15, 40]; // Array for numbers
// We can check the variables by using textcontent or in the console of browser using inspect 

headingA.textContent = (`Hello! I am ${myname} And I am ${myage} years old`);

// Objects
let dog = {name : "Kuro", breed : "Huskey"};
