import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

Seo.defaultProps = {
  title: 'Ateliê Terapia',
  description: 'Aqui vai uma descrição bem breve do que seu site tem de informações. Isso aparece no google.',
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Seo;
