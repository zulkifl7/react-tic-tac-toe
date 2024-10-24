import { useState } from "react";
import "./Box.css";

function Box({ value = "", buttonClicked, boxNumber }) {
	const [boxValue, setBoxValue] = useState();
	return <button onClick={() => buttonClicked(boxNumber)}>{value}</button>;
}

export default Box;
