import "./GameBoard.css";
import Box from "./Box/Box";
import imageX from "../../../assets/x.svg";
import imageO from "../../../assets/o.svg";
import { useState, useEffect } from "react";

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

let num = 0; // Variable to keep track of the turn (odd or even)

function GameBoard({ onSelectSquare }) {
	const [newGameBoard, setGameBoard] = useState(gameBoard);
	const [winner, setWinner] = useState(null);

	// Check for a winner whenever the game board changes
	useEffect(() => {
		const winner = checkWinner(newGameBoard);
		if (winner) {
			console.log(`${winner.props.src === imageX ? "X" : "O"} Won`);
			setWinner(winner);
		}
	}, [newGameBoard]);

	function buttonClickedHandle(row, col) {
		if (winner) return; // If there's a winner, do not allow further clicks

		if (num % 2 === 0) {
			// Player X's turn
			setGameBoard((prevGameBoard) => {
				const updatedBoard = prevGameBoard.map((innerArray) => [
					...innerArray,
				]);
				updatedBoard[row][col] = <img src={imageX} />;
				return updatedBoard;
			});
		} else {
			// Player O's turn
			setGameBoard((prevGameBoard) => {
				const updatedBoard = prevGameBoard.map((innerArray) => [
					...innerArray,
				]);
				updatedBoard[row][col] = <img src={imageO} />;
				return updatedBoard;
			});
		}

		onSelectSquare(); // Call the function to change the active player
		num += 1; // Increment the counter to switch turns
	}

	return (
		<ol id="game-board">
			{/* Map over the rows of the board to create the game grid */}
			{newGameBoard.map((row, index) => (
				<ol key={index}>
					{/* Map over each element in the row to create each square */}
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
	);
}

export default GameBoard;
