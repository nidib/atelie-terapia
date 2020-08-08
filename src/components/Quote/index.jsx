import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Quote = ({ text, owner }) => {
  return (
    <div className="quote">
      <p>{text}</p>
      {owner && <p className="owner">{owner}</p>}
    </div>
  );
};

Quote.defaultProps = {
  owner: null,
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  owner: PropTypes.string,
};

export default Quote;
