import React from 'react';

import Seo from '../../components/Seo';
import PageTitle from '../../components/PageTitle';
import Quote from '../../components/Quote';
import CardOnImage from '../../components/CardOnImage';
import Footer from '../../components/Footer';

import './styles.scss';

const About = () => {
  return (
    <>
      <Seo title="Ateliê Terapia | Sobre" />
      <PageTitle title="Um Pouco Sobre Mim" />
      <main>
        <section id="quote">
          <Quote text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos obcaecati, alias, nemo dolorem illum consectetur tempora rerum voluptates dolores aut, illo voluptas accusantium maiores magni sapiente tenetur velit mollitia voluptate." />
        </section>
        <section id="about-me">
          <CardOnImage imgSrc="/andrea.jpg" title="Oi, me chamo Andréa">
            <div className="text">
              <p>
                Quero escrever um pouco sobre a minha formação. Sou graduada em Ed.
                Artística  e pedagogia. Fiz pós graduação em Artes Plásticas, Administração
                Escolar, Educação Especial com ênfase em deficiência intelectual,
                Psicopedagogia Clínica e Institucional, Psicomotricidade, Arteterapia e
                Neuropsicopedagogia Clínica. Acredito que as bases teóricas contribuem
                muito para uma boa formação, além das experiências praticas.
              </p>
              <p>
                Estou aqui disposta a te ajudar nas barreiras que possam estar impedindo o
                aprendizado de seu filho ou de alguém que você conheça.
              </p>
              <p>
                Atendo também a grupos de idosos como arteterapeuta. Agende um dia para vir
                conhecer nosso espaço. Atendimento domiciliar ou online.
              </p>
            </div>
            <a href="https://wa.me/5511981855338">Me chame no Whatsapp</a>
          </CardOnImage>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
