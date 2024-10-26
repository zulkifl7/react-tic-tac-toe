# Tic-Tac-Toe React App

A simple and interactive Tic-Tac-Toe game built with React. This app allows two players to play a game of Tic-Tac-Toe, taking turns to mark their symbols (`X` or `O`) on a 3x3 game board. The game tracks the current player and updates the board as moves are made.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [How the Game Works](#how-the-game-works)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features
- Allows two players to play Tic-Tac-Toe.
- Displays the active player (Player X or Player O).
- Dynamically updates the game board based on player moves.
- Uses React state to manage the game board and player turns.
- Clean and simple UI with custom styling.

## Project Structure

The project is structured as follows:
```
src/
├── assets/                # Contains images for player X and O.
├── components/            # Contains all the React components.
│   └── GameContainer/     # Main game container component.
│       ├── GameContainer.jsx
│       ├── GameContainer.css
│       ├── GameBoard/     # Game board with squares.
│       │   ├── GameBoard.jsx
│       │   ├── GameBoard.css
│       │   └── Box/       # Optional Box component for individual squares.
│       └── Players/       # Displays player info.
│           ├── Players.jsx
│           ├── players.css
│           └── Player/    # Player component for editing and displaying player names.
│               ├── Player.jsx
│               └── player.css
├── App.js                 # Main entry point of the app.
├── index.js               # Renders the app into the DOM.
└── styles/                # Global styles for the application.

```

## Installation
To get a local copy up and running, follow these steps:

1. Clone the repository:

```
git clone https://github.com/zulkifl7/tictactoe-react.git
cd tictactoe-react
```

2. Install dependencies:

Make sure you have Node.js installed, then run:
```
npm install
```

3. Start the development server:
```
npm run dev
```

## Usage
- Open the app in your browser.
- The game starts with Player X as the default active player.
- Click on any square in the 3x3 grid to place your symbol (X or O).
- The active player changes after each move.
- The game does not yet check for a win condition, so play continues until the board is filled.

## Components Overview
1. GameContainer
- The main component that manages the game state and renders the player information and game board.
- Uses useState to track the active player and switches between Player X and Player O.
2. GameBoard
- Represents the 3x3 Tic-Tac-Toe board.
- Uses useState to store the current state of the board and updates it when a square is clicked.
- Uses onSelectSquare callback to notify GameContainer to change the active player.
3. Players
- Displays the two players and highlights the active player.
- Uses Player component to show player name and symbol.
- Allows players to edit their names.
4. Player
- Represents an individual player.
- Displays the player’s name and symbol.
- Allows the player to edit their name using an input field.
5. Box (Optional)
- Represents an individual square on the board.
- Handles click events to place a symbol and update the game board.

## How the Game Works
- Player Turns: Players take turns to click on squares. Player X starts first, followed by Player O.
- Marking Squares: Each square is marked with an X or O based on the player's turn.
- Board Updates: The game board is updated and re-rendered after each move.
- Active Player Highlighting: The active player is highlighted in the Players component.
- Edit Player Names: Players can change their names during the game using the edit button next to their name.

## Technologies Used
- React: For building the user interface and managing the state of the game.
- JavaScript (ES6+): For handling logic and game functionality.
- CSS: For styling the game board and components.
- HTML: For structuring the web application.

## Contributing
Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature 
```
git checkout -b feature-name
```
3. Make your changes.
4. Commit the changes 
```
git commit -m 'Add some feature'
```
5. Push to the branch 
```
git push origin feature-name
```
6. Create a Pull Request.
Please make sure to update tests as appropriate.

## License
This project is licensed under the MIT License - see the LICENSE file for details.


