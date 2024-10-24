import "./players.css";
import Player from "./Player/Player.jsx";

function Players() {
	return (
		<ol id="players">
			<Player defaultName="player 1" defaultSymbol="x" />
			<Player defaultName="player 2" defaultSymbol="0" />
		</ol>
	);
}

export default Players;
