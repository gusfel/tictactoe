import React from 'react';
import PropTypes from 'prop-types';

const Reset = ({ setWinner, setNewGame }) => (
  <input type="button" value="Reset" onClick={() => { setWinner(''); setNewGame(true); }} />
);

export default Reset;

Reset.propTypes = {
  setWinner: PropTypes.func.isRequired,
  setNewGame: PropTypes.func.isRequired,
};
