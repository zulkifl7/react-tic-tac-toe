import "./player.css";
import { useState } from "react";

// Player component to display and edit player details
function Player({ defaultName, defaultSymbol, classList }) {
	// State to manage whether the player name is being edited
	const [isEditing, setIsEditing] = useState(false);
	// State to keep track of the player's name
	const [playerName, setPlayerName] = useState(defaultName);

	// Toggle the editing mode when the edit button is clicked
	function editClickHandle() {
		setIsEditing((value) => !isEditing);
	}

	// Update the player's name as the user types into the input
	const changeName = (event) => {
		setPlayerName(event.target.value);
	};

	return (
		<li className={classList}>
			<span className="player">
				{/* Display the player name or an input field based on editing state */}
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
				{/* Display the player's symbol (e.g., "X" or "O") */}
				<span className="player-symbol">{defaultSymbol}</span>
			</span>
			{/* Button to toggle between "Edit" and "Save" modes */}
			<button onClick={editClickHandle}>
				{isEditing ? "Save" : "Edit"}
			</button>
		</li>
	);
}

export default Player;
