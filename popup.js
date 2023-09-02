// Initialize variables to store game data
let word = "";            // The chosen word to guess
let hiddenWord = [];      // The word displayed with underscores and revealed letters
let guessedLetters = [];  // List of guessed letters

// Fetch words from an API with a specific pattern
async function fetchWords() {
  const response = await fetch("https://api.datamuse.com/words?sp=??????*");
  const words = await response.json();
  return words.map(word => word.word);
}

// Choose a random word from the list of fetched words
async function chooseWord() {
  const wordList = await fetchWords();
  return wordList[Math.floor(Math.random() * wordList.length)];
}

// Initialize the game by selecting a word and setting up the variables
async function initializeGame() {
  word = await chooseWord();
  hiddenWord = Array(word.length).fill("_");
  guessedLetters = [];

  // Display the initial hidden word
  document.getElementById("word").textContent = hiddenWord.join(" ");
}

// Check a guessed letter
function checkGuess(letter) {
  if (guessedLetters.includes(letter)) {
    document.getElementById("message").textContent = "You've already guessed that letter!";
  } else {
    guessedLetters.push(letter);
    let correctGuess = false;

    // Iterate through the word to find matching letters
    for (let i = 0; i < word.length; i++) {
      if (word[i] === letter) {
        hiddenWord[i] = letter;
        correctGuess = true;
      }
    }

    // Update messages and display
    if (!correctGuess) {
      document.getElementById("message").textContent = "Incorrect guess!";
    } else {
      document.getElementById("message").textContent = "";
    }
    document.getElementById("word").textContent = hiddenWord.join(" ");
    document.getElementById("guessedLetters").innerHTML = guessedLetters.map(l => `<li>${l}</li>`).join("");
  }

  // Check if the player has guessed the entire word correctly
  if (hiddenWord.join("") === word) {
    document.getElementById("message").textContent = "Congratulations! You won!";
  }
}

// Check a guessed word
function checkWordGuess(wordGuess) {
  if (wordGuess === word) {
    hiddenWord = word.split("");
    document.getElementById("word").textContent = hiddenWord.join(" ");
    document.getElementById("message").textContent = "Congratulations! You won!";
  } else {
    document.getElementById("message").textContent = "Incorrect word guess!";
  }
}

// Event listener for "Guess Letter" button click
document.getElementById("submitGuess").addEventListener("click", () => {
  const letter = document.getElementById("guess").value.toLowerCase();
  if (letter) {
    checkGuess(letter);
    document.getElementById("guess").value = "";
  }
});

// Event listener for "Guess Word" button click
document.getElementById("submitWordGuess").addEventListener("click", () => {
  const wordGuess = document.getElementById("wordGuess").value.toLowerCase();
  if (wordGuess) {
    checkWordGuess(wordGuess);
    document.getElementById("wordGuess").value = "";
  }
});

// Event listener for "Reset Game" button click
document.getElementById("reset").addEventListener("click", async () => {
  await initializeGame();
  document.getElementById("message").textContent = "";
});

// Event listener for when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", async () => {
  await initializeGame();
});
