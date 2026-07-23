const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#submitGuess");
const result = document.querySelector("#result");
const prevGuess = document.querySelector("#guesses");
const remainingGuess = document.querySelector("#remaining");

const p = document.createElement("p");

let randomNumber = parseInt(Math.random() * 100 + 1);

let previousGuesses = [];
let playGame = true;
let numGuess = 1;

if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();

        const guess = parseInt(userInput.value);

        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        displayMessage("Please enter a valid number");
    }
    else if (guess < 1 || guess > 100) {
        displayMessage("Please enter a number between 1 and 100");
    }
    else {
        previousGuesses.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over! Random Number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage("🎉 Congratulations! You guessed the correct number.");
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage("Number is too low.");
    }
    else {
        displayMessage("Number is too high.");
    }
}

function displayGuess(guess) {
    userInput.value = "";
    prevGuess.innerHTML += `${guess} `;
    numGuess++;
    remainingGuess.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
    result.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    submit.setAttribute("disabled", "");
    p.innerHTML = `<h4 id="newGame" style="cursor:pointer; margin-top: 20px; ">Start New Game</h4>`;
    result.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener("click", function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        previousGuesses = [];
        numGuess = 1;
        prevGuess.innerHTML = "";
        remainingGuess.innerHTML = "10";
        userInput.removeAttribute("disabled");
        submit.removeAttribute("disabled");
        result.innerHTML = "";
        playGame = true;
    });

}