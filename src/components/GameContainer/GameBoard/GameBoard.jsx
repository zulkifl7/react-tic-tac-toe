import "./GameBoard.css";
import Box from "./Box/Box";
import imageX from "../../../assets/x.svg";
import imageO from "../../../assets/o.svg";
import { useState, useEffect } from "react";
import WinnerPopup from "./WinnerPopup/WinnerPopup";

// Initial empty game board state
const gameBoard = [
	[<img src="" />, <img src="" />, <img src="" />],
	[<img src="" />, <img src="" />, <img src="" />],
	[<img src="" />, <img src="" />, <img src="" />],
];

const winningCombinations = [
	// Horizontal Wins
	[
		[0, 0],
		[0, 1],
		[0, 2],
	], // Top row
	[
		[1, 0],
		[1, 1],
		[1, 2],
	], // Middle row
	[
		[2, 0],
		[2, 1],
		[2, 2],
	], // Bottom row

	// Vertical Wins
	[
		[0, 0],
		[1, 0],
		[2, 0],
	], // Left column
	[
		[0, 1],
		[1, 1],
		[2, 1],
	], // Middle column
	[
		[0, 2],
		[1, 2],
		[2, 2],
	], // Right column

	// Diagonal Wins
	[
		[0, 0],
		[1, 1],
		[2, 2],
	], // Top-left to bottom-right
	[
		[0, 2],
		[1, 1],
		[2, 0],
	], // Top-right to bottom-left
];

const checkWinner = (board) => {
	for (const combination of winningCombinations) {
		const [a, b, c] = combination;
		if (
			board[a[0]][a[1]].props.src &&
			board[a[0]][a[1]].props.src === board[b[0]][b[1]].props.src &&
			board[a[0]][a[1]].props.src === board[c[0]][c[1]].props.src
		) {
			return board[a[0]][a[1]]; // Return the winner (X or O)
		}
	}
	return null; // No winner
};

const calculateSuggestions = (board) => {
	const suggestions = [];
	// Analyze the board and suggest possible moves to block or win.
	for (const combination of winningCombinations) {
		const [a, b, c] = combination;
		const values = [
			board[a[0]][a[1]].props.src,
			board[b[0]][b[1]].props.src,
			board[c[0]][c[1]].props.src,
		];
		const emptyCount = values.filter((src) => src === "").length;
		const xCount = values.filter((src) => src.includes("x")).length;
		const oCount = values.filter((src) => src.includes("o")).length;

		if (emptyCount === 1) {
			if (xCount === 2) {
				suggestions.push("Player X could have won with a move here.");
			} else if (oCount === 2) {
				suggestions.push("Player O could have blocked Player X here.");
			}
		}
	}
	return suggestions;
};

let num = 0; // Variable to keep track of the turn (odd or even)
let winnerName = "";

function GameBoard({ onSelectSquare, players }) {
	const [newGameBoard, setGameBoard] = useState(gameBoard);
	const [winner, setWinner] = useState(null);
	const [moves, setMoves] = useState(0);
	const [showPopup, setShowPopup] = useState(false);
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const winnerNameUse = checkWinner(newGameBoard);
		if (winnerNameUse) {
			setWinner(winnerNameUse);
			setSuggestions(calculateSuggestions(newGameBoard));
			setShowPopup(true);
		}
	}, [newGameBoard]);

	console.log(players);
	if (winner && winner.props.src == "/src/assets/x.svg") {
		winnerName = players.player1;
		console.log("Winner is " + players.player1);
		console.log("Winner is 1" + players.player1);
		console.log("Winner is 2" + players.player1);
	} else if (winner && winner.props.src == "/src/assets/o.svg") {
		winnerName = players.player2;
	}

	function buttonClickedHandle(row, col) {
		if (winner) return; // If there's a winner, do not allow further clicks

		if (num % 2 === 0) {
			setGameBoard((prevGameBoard) => {
				const updatedBoard = prevGameBoard.map((innerArray) => [
					...innerArray,
				]);
				updatedBoard[row][col] = <img src={imageX} />;
				return updatedBoard;
			});
		} else {
			setGameBoard((prevGameBoard) => {
				const updatedBoard = prevGameBoard.map((innerArray) => [
					...innerArray,
				]);
				updatedBoard[row][col] = <img src={imageO} />;
				return updatedBoard;
			});
		}

		setMoves((prevMoves) => prevMoves + 1);
		onSelectSquare(); // Call the function to change the active player
		num += 1; // Increment the counter to switch turns
	}

	const closePopup = () => setShowPopup(false);

	return (
		<>
			<ol id="game-board">
				{newGameBoard.map((row, index) => (
					<ol key={index}>
						{row.map((element, elemIndex) => (
							<li key={elemIndex}>
								<button
									onClick={() =>
										buttonClickedHandle(index, elemIndex)
									}
									disabled={
										newGameBoard[index][elemIndex].props.src
											.length > 0 || winner !== null
									}
								>
									{element}
								</button>
							</li>
						))}
					</ol>
				))}
			</ol>

			{showPopup && (
				<WinnerPopup
					winnerNameProp={winnerName}
					moves={moves}
					suggestions={suggestions}
					onClose={closePopup}
				/>
			)}
		</>
	);
}

export default GameBoard;
