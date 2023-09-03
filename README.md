# Hangman Chrome Extension

<img width="82" alt="image" src="https://github.com/sudarshana/Hangman_ChromeExtension/assets/1330981/192690a4-5f2a-47da-9c93-aa6f3940bce8">

A simple Hangman game as a Chrome extension. 

The source code consists of four files working together to create a Hangman game as a browser extension. 

1. The **HTML file** defines the structure of the game interface, including placeholders for the hidden word, input fields for letter and word guesses, a list for displaying guessed letters, and buttons for submitting guesses and resetting the game.
2. The **CSS file** styles the layout and appearance of the game elements. 
3. The **JavaScript file** drives the game logic, allowing players to guess letters and words while updating the interface based on correct and incorrect guesses. It fetches words from an external API, chooses a random word, handles user interactions, displays messages, and manages the game's state. Additionally, it dynamically updates the interface to reveal guessed letters and the hidden word, providing feedback when a player wins or loses.
4. The **Manifest file** defines the configuration for the browser extension, specifying its name, version, description, and permissions required.

We are using the [Datamuse API](https://www.datamuse.com/api/), a word-finding query engine to source the words for the game. 

Find the [Hangman Chrome Extension](https://chrome.google.com/webstore/detail/hangman-chrome-extension/oloidjemckghkoacakpmmgkejefhjdno) at the Chrome Web Store. Created with the help of ChatGPT for Taffy Games. 
