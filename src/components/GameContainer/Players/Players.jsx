import "./players.css";
import logo from "../../../assets/logo-white.svg";
import Player from "./Player/Player.jsx";
import { useState } from "react";

function Players({ activePlayer }) {
	return (
		<ol id="players">
			<Player
				classList={activePlayer === "X" ? "active" : ""}
				defaultName="player 1"
				defaultSymbol="X"
			/>
			{/* <div>
				<div className="image"></div>
				<img src={logo} alt="tic tac toe logo" />
			</div> */}
			<Player
				classList={activePlayer === "O" ? "active" : ""}
				defaultName="player 2"
				defaultSymbol="O"
			/>
		</ol>
	);
}

export default Players;
