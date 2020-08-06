import React from 'react';
import Helmet from 'react-helmet';

import PageTitle from '../components/PageTitle';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ateliê Terapia</title>
        <meta name="description" content="Aqui vai uma descrição bem breve do que seu site tem de informações. Isso aparece no google." />
      </Helmet>
      <PageTitle title="Atendimento arteterapêutico, psicopedagógico e neuropsicopedagógico" />
    </>
  );
};

export default Home;
