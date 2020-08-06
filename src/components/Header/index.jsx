import React, { useState } from 'react';

import Logo from '../Logo';
import Nav from '../Nav';
import Hamburger from '../Hamburger';

import './styles.scss';

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <>
      {navActive && <div className="fade" />}
      <header className="container">
        <Logo />
        <Nav navActive={navActive} />
        <Hamburger navActive={navActive} setNavActive={setNavActive} />
      </header>
    </>
  );
};

export default Header;
