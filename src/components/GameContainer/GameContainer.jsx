import "./GameContainer.css";
import Players from "./Players/Players";
import GameBoard from "./GameBoard/GameBoard";

function GameContainer() {
	return (
		<div id="game-container">
			<Players />
			<GameBoard />
		</div>
	);
}

export default GameContainer;
