import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './styles.scss';

const Nav = ({ navActive }) => {
  return (
    <nav className={navActive ? 'active' : null}>
      <ul>
        <li>
          <Link to="/" activeClassName="active">Home</Link>
        </li>
        <li>
          <Link to="/especialidades" activeClassName="active">Especialidades</Link>
        </li>
        <li>
          <Link to="/sobre" activeClassName="active">Sobre</Link>
        </li>
        <li>
          <Link to="/contato" activeClassName="active">Contato</Link>
        </li>
        <li>
          <a href="https://google.com">Loja</a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  navActive: PropTypes.bool.isRequired,
};

export default Nav;
