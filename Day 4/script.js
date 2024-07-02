const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

buttonA.onclick = () => {
    const name = prompt("What is your name ?"); // helps to take input from user in website
    alert(`Hello ${name}, nice to meet you!`); // shows result in prompt form instead of text in web like textContent do 
    headingA.textContent = (`Welcome ${name}`);
};