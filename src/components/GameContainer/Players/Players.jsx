import "./players.css";
import logo from "../../../assets/logo-white.svg";
import Player from "./Player/Player.jsx";
import { useRef, useState } from "react";

// Players component that displays the players and their active status
function Players({ activePlayer, playerNames }) {
	let players = {
		player1: "X",
		player2: "O",
	};
	const getPlayer1 = (name) => {
		players.player1 = name;
		playerNames(players);
		console.log(name);
	};
	const getPlayer2 = (name) => {
		players.player2 = name;
		playerNames(players);
		console.log(name);
	};
	return (
		<ol id="players">
			{/* Render Player 1 with "active" class if it's their turn */}
			<Player
				classList={activePlayer === "X" ? "active" : ""}
				defaultName="player 1"
				defaultSymbol="X"
				sendName={getPlayer1}
			/>
			{/* Optional: Display the logo if needed */}
			{/* <div>
        <div className="image"></div>
        <img src={logo} alt="tic tac toe logo" />
      </div> */}
			{/* Render Player 2 with "active" class if it's their turn */}
			<Player
				classList={activePlayer === "O" ? "active" : ""}
				defaultName="player 2"
				defaultSymbol="O"
				sendName={getPlayer2}
			/>
		</ol>
	);
}

export default Players;
