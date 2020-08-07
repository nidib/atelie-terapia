import React from 'react';
import { Link } from 'gatsby';

import Seo from '../components/Seo';
import PageTitle from '../components/PageTitle';
import Quote from '../components/Quote';
import CardOnImage from '../components/CardOnImage';

const Home = () => {
  return (
    <>
      <Seo />
      <PageTitle title="Atendimento arteterapêutico, psicopedagógico e neuropsicopedagógico" />
      <main>
        <section id="quote">
          <Quote text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, tempore. Doloremque ut pariatur fugit voluptate neque harum nesciunt minima est earum sapiente, quaerat sequi atque nobis magnam, ducimus quis tenetur!" />
        </section>
        <section id="atendimento-psicopedagogico">
          <CardOnImage imgSrc="/playroom.jpg" title="Atendimento Psicopedagógico">
            <div className="text">
              <p>
                No primeiro atendimento com a psicopedagoga, os responsáveis pela criança ou
                adolescente expõem a queixa e relatam o desenvolvimento do seu filho(a) até o
                presente momento. Os dados coletados neste atendimento oferecem
                pistas para a avaliação.
              </p>
              <p>
                Depois o especialista realiza algumas sessões com o educando nas quais faz
                a avaliação psicopedagógica. Após o término da avaliação diagnóstica o
                especialista faz a devolutiva da mesma para os pais ou
                responsáveis e orienta-os sobre as intervenções.
              </p>
              <p>
                O educando irá dar continuidade aos estudos dessa vez com as
                intervenções corretas para eliminar as barreiras para uma aprendizagem mais eficaz.
              </p>
            </div>
            <Link to="/contato">Reservar</Link>
          </CardOnImage>
        </section>
      </main>
    </>
  );
};

export default Home;
