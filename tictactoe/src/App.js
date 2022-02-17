import './App.css';
import React, { useState } from 'react';
import Grid from './Grid';
import Reset from './Reset';

const App = () => {
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState('');
  const [newGame, setNewGame] = useState(false);

  const changePlayer = () => {
    if (player === 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    }
  };

  return (
    <div className="App">
      <Grid
        changePlayer={changePlayer}
        player={player}
        setWinner={setWinner}
        newGame={newGame}
        setNewGame={setNewGame}
      />
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
  );
};

export default App;
