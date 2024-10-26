import "./GameBoard.css";
import Box from "./Box/Box";
import imageX from "../../../assets/x.svg";
import imageO from "../../../assets/o.svg";
import { useState } from "react";

// Initial empty game board state
const gameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

// const wins = [[(0,0),(0,1),(0,2)]
let num = 0; // Variable to keep track of the turn (odd or even)

function GameBoard({ onSelectSquare }) {
	// State to hold the current state of the game board
	const [newGameBoard, setGameBoard] = useState(gameBoard);

	// Function to handle button clicks, updating the board
	function buttonClickedHandle(row, col) {
		// [<img src={imageX} />,<img src={imageO} />].map((elm) => {

		// })
		if (newGameBoard[row][col] === null) {
			if (num % 2 == 0) {
				// Player X's turn
				setGameBoard((pervGameBoard) => {
					// Create a deep copy of the current game board
					const updatedBoard = [
						...pervGameBoard.map((innerArray) => [...innerArray]),
					];
					// Place X's image at the clicked position
					updatedBoard[row][col] = <img src={imageX} />;
					return updatedBoard;
				});
			} else {
				// Player O's turn
				setGameBoard((pervGameBoard) => {
					// Create a deep copy of the current game board
					const updatedBoard = [
						...pervGameBoard.map((innerArray) => [...innerArray]),
					];
					// Place O's image at the clicked position
					updatedBoard[row][col] = <img src={imageO} />;
					return updatedBoard;
				});
			}
			onSelectSquare(); // Call the function to change the active player
			num += 1; // Increment the counter to switch turns
		}
		console.log(newGameBoard); // Log the current state of the board
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
									newGameBoard[index][elemIndex] === null
										? false
										: true
								}
							>
								{element}
							</button>
							{/* Optional: Use the Box component if needed */}
							{/* <Box
                boxNumber={[index, elemIndex]}
                buttonClicked={buttonClickedHandle}
                value={element}
              /> */}
						</li>
					))}
				</ol>
			))}
		</ol>
	);
}

export default GameBoard;
