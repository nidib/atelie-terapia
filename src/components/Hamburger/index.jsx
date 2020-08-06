import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Hamburger = ({ navActive, setNavActive }) => {
  function handleClick() {
    setNavActive(!navActive);
  }

  return (
    <button type="button" className="hamburger" onClick={handleClick}>Menu</button>
  );
};

Hamburger.propTypes = {
  navActive: PropTypes.bool.isRequired,
  setNavActive: PropTypes.func.isRequired,
};

export default Hamburger;
