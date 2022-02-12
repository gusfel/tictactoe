import './App.css';
import React, { useState } from 'react';
import Grid from './Grid';

const App = () => {
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState('');

  const changePlayer = () => {
    if (player === 'X') {
      setPlayer('O');
    } else {
      setPlayer('X');
    }
  };

  return (
    <div className="App">
      <Grid changePlayer={changePlayer} player={player} setWinner={setWinner} />
      {winner && (
        <div>
          <p>
            The winner is
            {' '}
            {winner}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
