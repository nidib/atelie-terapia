import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const Seo = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Richard Bidin">
      <meta name="keywords" content="psicopedagogia, neuropedagogia, andrea bidin, atendimento psicopedagoga, arteterapia, arte-terapia">
    </Helmet>
  );
};

Seo.defaultProps = {
  title: 'Ateliê Terapia | Andréa Bidin',
  description: 'Ateliê terapia é um espaço onde você poderá participar de oficinas arte terapêuticas em grupo ou atendimentos individuais com a arte terapeuta e psicopedagoga Andréa Bidin, atendendo crianças com deficiências nas dificuldades de aprendizagem e idosos que apresentem comprometimento cognitivo.',
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Seo;
