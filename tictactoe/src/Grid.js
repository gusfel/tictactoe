import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Box from './Box';

const Grid = ({
  changePlayer, player, setWinner, newGame, setNewGame, winner, addToCount, gameId, gameData,
}) => {
  const [tL, setTL] = useState('');
  const [tM, setTM] = useState('');
  const [tR, setTR] = useState('');
  const [mL, setML] = useState('');
  const [mM, setMM] = useState('');
  const [mR, setMR] = useState('');
  const [bL, setBL] = useState('');
  const [bM, setBM] = useState('');
  const [bR, setBR] = useState('');
  const [start, setStart] = useState(false);

  const obj = {
    TL: setTL,
    TM: setTM,
    TR: setTR,
    ML: setML,
    MM: setMM,
    MR: setMR,
    BL: setBL,
    BM: setBM,
    BR: setBR,
  };

  const checkForWinner = () => {
    const top = Boolean(tL === tM && tM === tR && tL && tM && tR);
    const middleR = Boolean(mL === mM && mM === mR && mL && mM && mR);
    const bottom = Boolean(bL === bM && bM === bR && bL && bM && bR);
    const downRight = Boolean(tL === mM && mM === bR && tL && mM && bR);
    const downLeft = Boolean(tR === mM && mM === bL && tR && mM && bL);
    const left = Boolean(tL === mL && mL === bL && tL && mL && bL);
    const middleC = Boolean(tM === mM && mM === bM && tM && mM && bM);
    const right = Boolean(tR === mR && mR === bR && tR && mR && bR);
    if (
      top
      || middleR
      || bottom
      || downLeft
      || downRight
      || left
      || middleC
      || right
    ) {
      addToCount(player);
      setWinner(player);
    }
  };
  useEffect(() => {
    setTL('');
    setTM('');
    setTR('');
    setML('');
    setMM('');
    setMR('');
    setBL('');
    setBM('');
    setBR('');
    setNewGame(false);
  }, [newGame]);

  useEffect(() => {
    checkForWinner();
    if (start) {
      changePlayer();
    }
    setStart(true);
  }, [tL, tM, tR, mL, mM, mR, bL, bM, bR]);

  useEffect(() => {
    if (gameData) {
      gameData.forEach((squareData) => {
        obj[squareData[0]](squareData[1]);
      });
    }
  }, [gameData]);

  const takeTurn = async (e) => {
    if (!winner) {
      const square = e.target.id;
      obj[square](player);
      axios.post('http://localhost:3010/updateGame', { currPlayer: player, square, gameId });
    }
  };

  return (
    <div id="grid">
      <div className="row">
        <Box takeTurn={takeTurn} changePlayer={changePlayer} currId="TL" value={tL} />
        <Box takeTurn={takeTurn} changePlayer={changePlayer} currId="TM" value={tM} />
        <Box takeTurn={takeTurn} changePlayer={changePlayer} currId="TR" value={tR} />
      </div>
      <div className="row">
        <Box takeTurn={takeTurn} changePlayer={changePlayer} currId="ML" value={mL} />
        <Box takeTurn={takeTurn} changePlayer={changePlayer} currId="MM" value={mM} />
        <Box takeTurn={takeTurn} changePlayer={changePlayer} currId="MR" value={mR} />
      </div>
      <div className="row">
        <Box takeTurn={takeTurn} changePlayer={changePlayer} currId="BL" value={bL} />
        <Box takeTurn={takeTurn} changePlayer={changePlayer} currId="BM" value={bM} />
        <Box takeTurn={takeTurn} changePlayer={changePlayer} currId="BR" value={bR} />
      </div>
    </div>
  );
};

export default Grid;

Grid.propTypes = {
  player: PropTypes.string.isRequired,
  changePlayer: PropTypes.func.isRequired,
  setWinner: PropTypes.func.isRequired,
  newGame: PropTypes.bool.isRequired,
  winner: PropTypes.string.isRequired,
  setNewGame: PropTypes.func.isRequired,
  addToCount: PropTypes.func.isRequired,
  gameId: PropTypes.number.isRequired,
  gameData: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string),
  ),
};

Grid.defaultProps = {
  gameData: [],
};
