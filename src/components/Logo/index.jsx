import React from 'react';

import LogoSVG from '../../assets/logo.svg';

import './styles.scss';

const Logo = () => {
  return (
    <div className="logo">
      <LogoSVG />
      <h1>
        ATELIÊ
        <br />
        TERAPIA
      </h1>
    </div>
  );
};

export default Logo;
