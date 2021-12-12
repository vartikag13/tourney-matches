import MatchList from './components/MatchList'
import PlayerList from './components/PlayerList'
import playerData from './data/playerData';
import matchData from './data/matchData';
import './App.css';

function App() {
  const playerProps = { playerData , matchData };
  return (
    <div className="App">
      <h1>Tourney Matches <span>Where Coding and Tournaments found their Match!</span></h1>
      <PlayerList {...playerProps}  />
    <MatchList />
    </div>
  );
}

export default App;
