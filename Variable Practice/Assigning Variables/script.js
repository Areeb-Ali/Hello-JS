const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const message = document.getElementById("message");

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

guessButton.addEventListener("click", () => {
const guess = parseInt(guessInput.value);

  if (isNaN(guess)) {
    message.textContent = "Please Input a valid number between 1-100";
    return;
  }

  attempts++;

  if (guess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    guessButton.disabled = true;
  } else if (guess < randomNumber) {
    message.textContent = "Too low! Guess higher.";
  } else {
    message.textContent = "Too high! Guess lower.";
  }

  guessInput.value = " ";
});
