import "./GameBoard.css";
import Box from "./Box/Box";
import { useState } from "react";

const gameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];
let num = 0;

function GameBoard() {
	const [newGameBoard, setGameBoard] = useState(gameBoard);
	function buttonClickedHandle(row, col) {
		if (num % 2 == 0) {
			setGameBoard((pervGameBoard) => {
				const updatedBoard = [
					...pervGameBoard.map((innerArray) => [...innerArray]),
				];
				updatedBoard[row][col] = "X";
				return updatedBoard;
			});
		} else {
			setGameBoard((pervGameBoard) => {
				const updatedBoard = [
					...pervGameBoard.map((innerArray) => [...innerArray]),
				];
				updatedBoard[row][col] = "O";
				return updatedBoard;
			});
		}
		// console.log(newGameBoard[value[0]][value[1]]);
		console.log(newGameBoard);
		// console.log(newGameBoard);
		num += 1;
	}
	return (
		<ol id="game-board">
			{newGameBoard.map((row, index) => (
				<ol key={index}>
					{row.map((element, elemIndex) => (
						<li key={elemIndex}>
							<button
								onClick={() =>
									buttonClickedHandle(index, elemIndex)
								}
							>
								{element}
							</button>
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
