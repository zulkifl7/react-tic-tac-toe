import "./GameContainer.css";
import Players from "./Players/Players";
import GameBoard from "./GameBoard/GameBoard";
import { useState } from "react";

// State to keep track of the active player, starting with "X"
let playerNames = {
	player1: "Player 1",
	player2: "Player 2",
};
// GameContainer component that manages the state of the game
function GameContainer() {
	const [activePlayer, setActivePlayer] = useState("X");
	const [players, setPlayers] = useState(playerNames);

	// Function to change the active player between "X" and "O"
	function changePlayer() {
		setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
		console.log(activePlayer);
	}

	const getPlayers = (players) => {
		playerNames.player1 = players.player1;
		playerNames.player2 = players.player2;
		setPlayers(players);
		console.log(players);
	};

	return (
		<div id="game-container">
			{/* Players component to display the current active player */}
			<Players activePlayer={activePlayer} playerNames={getPlayers} />
			{/* GameBoard component with a callback to change player when a square is selected */}
			<GameBoard onSelectSquare={changePlayer} players={playerNames} />
		</div>
	);
}

export default GameContainer;
