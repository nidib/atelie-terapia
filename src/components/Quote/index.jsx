import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Quote = ({ text }) => {
  return (
    <div className="quote">
      <p>{text}</p>
    </div>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Quote;
