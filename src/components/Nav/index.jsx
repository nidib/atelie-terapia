import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import { siteMap } from '../../data';

import './styles.scss';

const Nav = ({ navActive }) => {
  return (
    <nav className={navActive ? 'active' : null}>
      <ul>
        {
          siteMap.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.href} activeClassName="active">{link.name}</Link>
              </li>
            );
          })
        }
        <li>
          <a href="http://atelieterapia.com.br/">Arteterapia</a>
        </li>
        <li>
          <a href="https://www.elo7.com.br/atelieterapiaandreabidin">Loja</a>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  navActive: PropTypes.bool.isRequired,
};

export default Nav;
