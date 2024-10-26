import Cursor from "./components/Cursor/Cursor";
import Header from "./components/Header/Header";
import GameContainer from "./components/GameContainer/GameContainer";

function App() {
	return (
		<>
			<Cursor />
			{/* <Header /> */}
			<main>
				<GameContainer />
			</main>
		</>
	);
}

export default App;
