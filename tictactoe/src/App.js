import './App.css';
import React, { useState } from 'react';
import Grid from './Grid';
import Reset from './Reset';

const App = () => {
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState('');
  const [newGame, setNewGame] = useState(false);
  const [xCount, setXCount] = useState(0);
  const [oCount, setOCount] = useState(0);

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

  return (
    <div className="App">
      <Grid
        changePlayer={changePlayer}
        player={player}
        setWinner={setWinner}
        newGame={newGame}
        setNewGame={setNewGame}
        winner={winner}
        addToCount={addToCount}
      />
      <div id="winCounts">
        <spam>
          X wins:
          {' '}
          {xCount}
        </spam>
        <spam>
          0 wins:
          {' '}
          {oCount}
        </spam>
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
  );
};

export default App;
