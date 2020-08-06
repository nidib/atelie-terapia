import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Header from '../Header';

import './styles.scss';

const PageTitle = ({ title, children }) => {
  return (
    <div className="page-title">
      <Header />
      <h1>{title}</h1>
      <Link to="/contato">Agende um atendimento</Link>
      {children}
    </div>
  );
};

PageTitle.defaultProps = {
  children: null,
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PageTitle;
