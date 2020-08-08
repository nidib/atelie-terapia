import React from 'react';

import Redirect from '../components/Redirect';

const NotFound = () => {
  return (
    <Redirect seoTitle="Página não encontrada" message="Essa página não existe ☹️" countFrom={5} />
  );
};

export default NotFound;
