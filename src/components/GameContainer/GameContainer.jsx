import "./GameContainer.css";
import Players from "./Players/Players";
import GameBoard from "./GameBoard/GameBoard";
import { useState } from "react";

function GameContainer() {
	const [activePlayer, setActivePlayer] = useState("X");
	function changePlayer() {
		setActivePlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
		console.log(activePlayer);
	}
	return (
		<div id="game-container">
			<Players activePlayer={activePlayer} />
			<GameBoard onSelectSquare={changePlayer} />
		</div>
	);
}

export default GameContainer;
