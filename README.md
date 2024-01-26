 # Rock, Paper, Scissors Game

This is a simple Rock, Paper, Scissors game implemented using HTML, CSS, and JavaScript. The game allows users to select one of the three options (rock, paper, or scissors) and then displays the computer's choice and the result of the game.

## Code Overview

The code consists of three main files:

- `index.html`: This is the main HTML file that defines the structure of the game. It includes the necessary HTML elements and links to the CSS and JavaScript files.
- `style.css`: This file contains the CSS styles for the game. It defines the layout, colors, and fonts used in the game.
- `script.js`: This file contains the JavaScript code that implements the game logic. It handles user input, generates the computer's choice, and displays the result of the game.

## HTML Code

The `index.html` file contains the following HTML elements:

- `<main>`: This element contains the main content of the game, including the headings, buttons, and result message.
- `<h1>` elements: These headings display the computer's choice, the user's choice, and the result of the game.
- `<button>` elements: These buttons allow the user to select one of the three options (rock, paper, or scissors).

## CSS Code

The `style.css` file contains the following CSS styles:

- `body`: This style defines the overall layout and font of the game.
- `main`: This style defines the layout of the main content.
- `h1`: This style defines the font and size of the headings.
- `button`: This style defines the appearance of the buttons.

## JavaScript Code

The `script.js` file contains the following JavaScript code:

- `const choices`: This array contains the three possible choices (rock, paper, and scissors).
- `let computerChoice`: This variable stores the computer's choice.
- `let userChoice`: This variable stores the user's choice.
- `let result`: This variable stores the result of the game.

The `script.js` file also contains the following functions:

- `getComputerChoice()`: This function generates a random number between 0 and 2 and uses it to select the computer's choice.
- `getUserChoice()`: This function gets the user's choice from the button that was
