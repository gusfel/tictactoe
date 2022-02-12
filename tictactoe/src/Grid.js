import React, { useState, useEffect } from 'react';

const Grid = ({ changePlayer, player, setWinner }) => {
  const [tL, setTL] = useState('');
  const [tM, setTM] = useState('');
  const [tR, setTR] = useState('');
  const [mL, setML] = useState('');
  const [mM, setMM] = useState('');
  const [mR, setMR] = useState('');
  const [bL, setBL] = useState('');
  const [bM, setBM] = useState('');
  const [bR, setBR] = useState('');

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
      setWinner(player);
    }
    return false;
  };

  useEffect(() => {
    checkForWinner();
    changePlayer();
  }, [tL, tM, tR, mL, mM, mR, bL, bM, bR]);

  const takeTurn = async (e) => {
    const square = e.target.id;
    obj[square](player);
  };

  return (
    <div id="grid">
      <div className="row">
        <div className="box" role="button" id="TL" onClick={(e) => takeTurn(e)}>
          {tL}
        </div>
        <div className="box" role="button" id="TM" onClick={(e) => takeTurn(e)}>
          {tM}
        </div>
        <div className="box" role="button" id="TR" onClick={(e) => takeTurn(e)}>
          {tR}
        </div>
      </div>
      <div className="row">
        <div className="box" role="button" id="ML" onClick={(e) => takeTurn(e)}>
          {mL}
        </div>
        <div className="box" role="button" id="MM" onClick={(e) => takeTurn(e)}>
          {mM}
        </div>
        <div className="box" role="button" id="MR" onClick={(e) => takeTurn(e)}>
          {mR}
        </div>
      </div>
      <div className="row">
        <div className="box" role="button" id="BL" onClick={(e) => takeTurn(e)}>
          {bL}
        </div>
        <div className="box" role="button" id="BM" onClick={(e) => takeTurn(e)}>
          {bM}
        </div>
        <div className="box" role="button" id="BR" onClick={(e) => takeTurn(e)}>
          {bR}
        </div>
      </div>
    </div>
  );
};

export default Grid;
