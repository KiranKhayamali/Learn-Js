let numberRandomizer = Math.floor(Math.random()* 100 )+ 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHigh");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;

function checkGuess(){
    const userGuess = Number(guessField.value);
    if (guessCount === 1){
        guesses.textContent = "Previous Guesses :";
    }
    guesses.textContent = `$(guesses.textContent), $(userGuess)`;

    if (userGuess === numberRandomizer){
        lastResult.textContent = "Congratulations! You have guess correctly";
        lastResult.style.backgroundColor = "green";
        lowOrHigh.textContent = "";
        setGameOver();
    }else if(guessCount === 10){
        lastResult.textContent = "Game Over! You have guessed incorrectly" + `$(numberRandomizer) is the guess number.`;
        lastResult.style.backgroundColor= "red";
        lowOrHigh.textContent = "";
        setGameOver();
    }else{
        lastResult.textContent= "Wrong Guess! Try Again";
        lastResult.style.backgroundColor = "red";
        if (userGuess<numberRandomizer){
            lowOrHigh.textContent= "Last Guess was Low!";  
        }else if (userGuess > numberRandomizer){
            lowOrHigh.textContent  = "Last Guess was High!";
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);    
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton  = document.createElement("button");
    resetButton.textContent  = "Start new game";
    document.body.append(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resetParas p");
    for (const resetPara of resetParas){
        resetPara.textContent = "";
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";
    guesses.style.fontSize = "200%";
    guesses.style.padding = "10px";
    numberRandomizer = Math.floor(Math.random()*100 ) +1;

}