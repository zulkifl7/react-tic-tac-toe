import "./GameBoard.css";
import Box from "./Box/Box";

function GameBoard() {
	let gameProgress = {
		clicked: {
			0: undefined,
			1: undefined,
			2: undefined,
			3: undefined,
			4: undefined,
			5: undefined,
			6: undefined,
			7: undefined,
			8: undefined,
		},
		players: {
			0: [],
			1: [],
		},
	};
	let num = 0;
	function buttonClickedHandle(value) {
		gameProgress["clicked"][num] = value;
		gameProgress["players"][num % 2].push(value);
		console.log(gameProgress);
		num += 1;
	}
	return (
		<div id="game-board">
			<ol>
				<Box
					boxNumber={0}
					buttonClicked={buttonClickedHandle}
					value="x"
				/>
				<Box boxNumber={1} buttonClicked={buttonClickedHandle} />
				<Box boxNumber={2} buttonClicked={buttonClickedHandle} />
			</ol>
			<ol>
				<Box boxNumber={3} buttonClicked={buttonClickedHandle} />
				<Box boxNumber={4} buttonClicked={buttonClickedHandle} />
				<Box boxNumber={5} buttonClicked={buttonClickedHandle} />
			</ol>
			<ol>
				<Box boxNumber={6} buttonClicked={buttonClickedHandle} />
				<Box boxNumber={7} buttonClicked={buttonClickedHandle} />
				<Box boxNumber={8} buttonClicked={buttonClickedHandle} />
			</ol>
		</div>
	);
}
export default GameBoard;
