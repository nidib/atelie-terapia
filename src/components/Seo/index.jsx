import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

const Seo = ({
  title,
  description,
  follow,
  googleVerify,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      {googleVerify && <meta name="google-site-verification" content="SMVFpCIqhUmJXMpwpRx5sk2SxBmBZutlhEkXu82NZSs" />}
      {!follow && <meta name="robots" content="noindex, nofollow" />}
      {follow && <meta name="robots" content="index, follow" />}
      <meta name="description" content={description} />
      <meta name="author" content="Richard Bidin" />
      <meta name="keywords" content="psicopedagogia, neuropedagogia, andrea bidin, atendimento psicopedagoga, arteterapia, arte-terapia" />
    </Helmet>
  );
};

Seo.defaultProps = {
  title: 'Ateliê Terapia | Andréa Bidin',
  description: 'Ateliê terapia é um espaço onde você poderá participar de oficinas arte terapêuticas em grupo ou atendimentos individuais com a arte terapeuta e psicopedagoga Andréa Bidin, atendendo crianças com deficiências nas dificuldades de aprendizagem e idosos que apresentem comprometimento cognitivo.',
  follow: true,
  googleVerify: false,
};

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  follow: PropTypes.bool,
  googleVerify: PropTypes.bool,
};

export default Seo;
