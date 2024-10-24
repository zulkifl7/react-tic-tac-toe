import "./Box.css";

function Box({ value, buttonClicked, boxNumber }) {
	return <button onClick={() => buttonClicked(boxNumber)}>{value}</button>;
}

export default Box;
