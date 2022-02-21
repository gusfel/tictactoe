/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ loadingPageFunc }) => {
  const [game, setGame] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    loadingPageFunc(Number(game));
  };

  return (
    <div>
      <input type="button" value="New Game?" onClick={() => loadingPageFunc('new')} />
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          Load old game?
          <input type="number" value={game} onChange={(e) => setGame(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;

Login.propTypes = {
  loadingPageFunc: PropTypes.func.isRequired,
};
