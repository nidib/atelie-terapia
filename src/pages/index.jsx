import React from 'react';
import { Link } from 'gatsby';

import Seo from '../components/Seo';
import PageTitle from '../components/PageTitle';
import Quote from '../components/Quote';
import CardOnImage from '../components/CardOnImage';
import Footer from '../components/Footer';

import './index.scss';

const Home = () => {
  return (
    <>
      <Seo googleVerify />
      <PageTitle title="Atendimento arteterapêutico, psicopedagógico e neuropsicopedagógico" />
      <main>
        <section id="quote">
          <Quote text="O processo terapêutico utiliza a arte e as diferentes maneiras de expressões artísticas buscando uma maneira mais prazerosa de conseguir novas descobertas e criar novas possibilidades." owner="Andréa Bidin" />
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
        <section id="tipos-de-atendimento">
          <h2>Tipos de Atendimento</h2>
          <ul>
            <li>
              Atendimento online em época de pandemia
            </li>
            <li>
              Atendimento à todas as idades
            </li>
            <li>
              Atendimento à crianças com dificuldades de aprendizagem
            </li>
            <li>
              Atendimentos individuais e grupos terapêuticos (Arteterapia)
            </li>
            <li>
              Atendimento domiciliar àqueles que estão impossibilitados por
              limitações físicas ou clínicas
            </li>
            <li>
              Diagnósticos e Intervenções das dificuldades de aprendizagem
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
