// src/components/GameContainer/WinnerPopup/WinnerPopup.jsx
import React from "react";
import "./WinnerPopup.css";

function WinnerPopup({ winner, moves, suggestions, onClose }) {
	return (
		<div className="winner-popup">
			<div className="popup-content">
				<h2>Congratulations!</h2>
				<p>{winner} Won 🎉</p>
				<p>Total Moves: {moves}</p>
				<h3>Suggestions for Improvement:</h3>
				<ul>
					{suggestions.length > 0 ? (
						suggestions.map((suggestion, index) => (
							<li key={index}>{suggestion}</li>
						))
					) : (
						<li>No missed opportunities this time. Well played!</li>
					)}
				</ul>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
}

export default WinnerPopup;
