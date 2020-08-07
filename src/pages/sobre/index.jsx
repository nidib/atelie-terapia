import React from 'react';

import Seo from '../../components/Seo';
import PageTitle from '../../components/PageTitle';
import Quote from '../../components/Quote';
import Footer from '../../components/Footer';

const About = () => {
  return (
    <>
      <Seo title="Ateliê Terapia | Sobre" />
      <PageTitle title="Um Pouco Sobre Mim" />
      <Quote text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos obcaecati, alias, nemo dolorem illum consectetur tempora rerum voluptates dolores aut, illo voluptas accusantium maiores magni sapiente tenetur velit mollitia voluptate." />
      <Footer />
    </>
  );
};

export default About;
