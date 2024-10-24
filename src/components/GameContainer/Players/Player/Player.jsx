import "./player.css";
import { useState } from "react";

function Player({ defaultName, defaultSymbol }) {
	const [isEditing, setIsEditing] = useState(false);
	const [playerName, setPlayerName] = useState(defaultName);
	function editClickHandle() {
		setIsEditing((value) => !isEditing);
	}
	const changeName = (event) => {
		setPlayerName(event.target.value);
	};
	return (
		<li>
			<span className="player">
				{!isEditing ? (
					<span className="player-name">{playerName}</span>
				) : (
					<input
						type="text"
						required
						value={playerName}
						onChange={changeName}
					></input>
				)}
				<span className="player-symbol">{defaultSymbol}</span>
			</span>
			<button onClick={editClickHandle}>
				{isEditing ? "Save" : "Edit"}
			</button>
		</li>
	);
}

export default Player;
