import React, { useState } from 'react';

const Grid = (props) => {
  const [tL, setTL] = useState('');
  const [tM, setTM] = useState('');
  const [tR, setTR] = useState('');
  const [mL, setML] = useState('');
  const [mM, setMM] = useState('');
  const [mR, setMR] = useState('');
  const [bL, setBL] = useState('');
  const [bM, setBM] = useState('');
  const [bR, setBR] = useState('');
  return (
    <div id="main">
      <div onClick={() => setTL('X')}>{tL}</div>
    </div>
  );
};

export default Grid;
