import "./players.css";
import Player from "./Player/PLayer";

function Players() {
  return (
    <ol id="players">
      <Player playerName="player 1" playerSymbol="x" />
      <Player playerName="player 2" playerSymbol="0" />
    </ol>
  );
}

export default Players;
