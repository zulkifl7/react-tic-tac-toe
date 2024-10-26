import "./players.css";
import logo from "../../../assets/logo-white.svg";
import Player from "./Player/Player.jsx";
import { useState } from "react";

// Players component that displays the players and their active status
function Players({ activePlayer }) {
	return (
		<ol id="players">
			{/* Render Player 1 with "active" class if it's their turn */}
			<Player
				classList={activePlayer === "X" ? "active" : ""}
				defaultName="player 1"
				defaultSymbol="X"
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
			/>
		</ol>
	);
}

export default Players;
