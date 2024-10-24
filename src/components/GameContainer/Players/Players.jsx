import "./players.css";
import Player from "./Player/Player.jsx";

function Players() {
	return (
		<ol id="players">
			<Player defaultName="player 1" defaultSymbol="X" />
			<Player defaultName="player 2" defaultSymbol="O" />
		</ol>
	);
}

export default Players;
