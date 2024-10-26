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
```npm install
```

3. Start the development server:
```npm start
```