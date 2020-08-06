import React from 'react';
import Helmet from 'react-helmet';

import PageTitle from '../components/PageTitle';

const Home = () => {
  return (
    <>
      <Helmet title="Ateliê Terapia" />
      <PageTitle title="Atendimento arteterapêutico, psicopedagógico e neuropsicopedagógico" />
    </>
  );
};

export default Home;
