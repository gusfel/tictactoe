import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ takeTurn, value, currId }) => (
  <div
    className="box"
    role="button"
    id={currId}
    tabIndex={0}
    onKeyPress={(e) => takeTurn(e)}
    onClick={(e) => {
      takeTurn(e);
    }}
  >
    {value}
  </div>
);

export default Box;

Box.propTypes = {
  value: PropTypes.string.isRequired,
  takeTurn: PropTypes.func.isRequired,
  currId: PropTypes.string.isRequired,
};
