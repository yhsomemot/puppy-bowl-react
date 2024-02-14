import { useState, useEffect } from "react";
import "./App.css";
import { getPlayers, getPlayer, deletePlayer } from "./api";
import { Player } from "./components/Player";
import { PlayerDetails } from "./components/PlayerDetails";


function App() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});

  useEffect(() => {
    // getPlayers().then(setPlayers);
    getPlayers().then((players) => {
      setPlayers(players);
    });
  }, []);

  function handlePlayerClick(playerId) {
    getPlayer(playerId).then(setPlayer);
  }

  function handlePlayerDelete(playerId) {
    deletePlayer(playerId).then(() => {
      getPlayers().then((players) => {
        setPlayers(players);
      });
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = newFormData(evt.target);

  }
  return (
    <>
      <h1>Puppy Bowl</h1>
      <PlayerDetails player={player} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Breed</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            return (
              <Player key={player.id} 
              player={player} 
              onClick={handlePlayerClick}
              onDelete={handlePlayerDelete} 
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default App;
