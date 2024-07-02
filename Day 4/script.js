const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
    const name = prompt("What is your name ?"); // helps to take input from user in website on pop up form  
    alert(`Hello ${name}, nice to meet you!`); // shows result in pop up form instead of text in web like textContent do 
    headingA.textContent = (`Welcome ${name}`);
};

let myname = "Kiran";
let myage = 22;

headingA.textContent = (`Hello! I am ${myname} And I am ${myage} years old`);