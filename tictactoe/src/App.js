import './App.css';
import React, { useState } from 'react';
import axios from 'axios';
import Grid from './Grid';
import Reset from './Reset';
import Login from './Login';

const App = () => {
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState('');
  const [newGame, setNewGame] = useState(false);
  const [xCount, setXCount] = useState(0);
  const [oCount, setOCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [gameId, setGameId] = useState(null);
  const [gameData, setGameData] = useState([]);

  const changePlayer = () => {
    if (player === 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    }
  };

  const addToCount = (letter) => {
    if (letter === 'X') {
      setXCount(xCount + 1);
    } else {
      setOCount(oCount + 1);
    }
  };

  const loadingPageFunc = (val) => {
    setLoading(false);
    if (val === 'new') {
      axios.get('http://localhost:3010/newGame')
        .then((res) => {
          setGameId(res.data.gameId);
        });
    } else {
      setGameId(val);
      axios.get(`http://localhost:3010/oldGame?gameId=${val}`)
        .then((res) => {
          setGameData([...gameData, ...res.data.gameData]);
        });
    }
  };

  return (
    <div className="App">
      {loading
        ? <Login loadingPageFunc={loadingPageFunc} />
        : (
          <div id="loggedIn">
            <Grid
              changePlayer={changePlayer}
              player={player}
              setWinner={setWinner}
              newGame={newGame}
              setNewGame={setNewGame}
              winner={winner}
              addToCount={addToCount}
              gameData={gameData}
              gameId={gameId}
            />
            <div id="winCounts">
              <span>
                X wins:
                {' '}
                {xCount}
              </span>
              <span>
                0 wins:
                {' '}
                {oCount}
              </span>
            </div>
            {winner && (
            <div>
              <p>
                The winner is
                {' '}
                {winner}
              </p>
              <Reset setWinner={setWinner} setNewGame={setNewGame} />
            </div>
            )}
          </div>
        )}
    </div>
  );
};

export default App;
