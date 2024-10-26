import "./GameContainer.css";
import Players from "./Players/Players";
import GameBoard from "./GameBoard/GameBoard";
import { useState } from "react";

// GameContainer component that manages the state of the game
function GameContainer() {
	// State to keep track of the active player, starting with "X"
	const [activePlayer, setActivePlayer] = useState("X");

	// Function to change the active player between "X" and "O"
	function changePlayer() {
		setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
		console.log(activePlayer);
	}

	return (
		<div id="game-container">
			{/* Players component to display the current active player */}
			<Players activePlayer={activePlayer} />
			{/* GameBoard component with a callback to change player when a square is selected */}
			<GameBoard onSelectSquare={changePlayer} />
		</div>
	);
}

export default GameContainer;
