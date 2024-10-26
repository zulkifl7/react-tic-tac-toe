import "./Header.css";
import logo from "../../assets/logo-white.svg";

function Header() {
	return (
		<header>
			<img src={logo} alt="tic tac toe logo" />
			{/* <h1>TIC-TAC-TOE</h1> */}
		</header>
	);
}

export default Header;
