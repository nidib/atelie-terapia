import React, { useState, useEffect } from 'react';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';

import Seo from '../Seo';

import './styles.scss';

const Redirect = ({ seoTitle, message, countFrom }) => {
  const [counter, setCounter] = useState(countFrom);

  useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setInterval(() => setCounter(counter - 1), 1000);
    }
    if (counter === 0) {
      navigate('/');
    }
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      <Seo title={`Ateliê Terapia | ${seoTitle}`} />
      <div id="page-redirect">
        <p>
          {message}
        </p>
        <p>
          Retornando à página principal em
          <span>{` ${counter} `}</span>
          segundos
        </p>
      </div>
    </>
  );
};

Redirect.propTypes = {
  seoTitle: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  countFrom: PropTypes.number.isRequired,
};

export default Redirect;
