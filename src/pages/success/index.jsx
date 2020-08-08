import React from 'react';

import Redirect from '../../components/Redirect';

const Success = () => {
  return (
    <Redirect seoTitle="Mensagem enviada!" message="Sua mensagem foi enviada! Entrarei em contato assim que possível" countFrom={7} />
  );
};

export default Success;
