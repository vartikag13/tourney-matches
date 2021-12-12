// import playerData from '../data/playerData';
// import matchData from '../data/matchData';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';
import Player from "./Player";

function PlayerList(props) {
  const preparedPlayerData = preparePlayerData(props.playerData);
  const parsedPlayerData = addWinsToPlayers(preparedPlayerData, props.matchData);
  const parsedPlayers = parsedPlayerData.map(player => <Player key={player.gamerTag} {...player} />);
  return (
    <section className="PlayerList">
      <h1>Current participating players</h1>
      { parsedPlayers }
    </section>
  );
}

export default PlayerList;