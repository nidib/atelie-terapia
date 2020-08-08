import React from 'react';
import { Link } from 'gatsby';

import Seo from '../../components/Seo';
import PageTitle from '../../components/PageTitle';
import Quote from '../../components/Quote';
import CardOnImage from '../../components/CardOnImage';
import Footer from '../../components/Footer';

import './styles.scss';

const Services = () => {
  return (
    <>
      <Seo title="Ateliê Terapia | Especialidades" />
      <PageTitle title="Minhas Especialidades" />
      <main>
        <section id="quote">
          <Quote text="O que tentamos encontrar é a relação particular do sujeito com o conhecimento e o significado do aprender." owner="Alicia Fernández" />
        </section>
        <section id="services">
          <CardOnImage imgSrc="/kid-drawing.jpg" title="Atendimento à crianças">
            <div className="text">
              <p>
                Compreender como o cérebro funciona auxilia no processo de ensino e aprendizagem
                pois há uma ligação entre o desenvolvimento do cérebro e os estímulos que as
                pessoas recebem do ambiente no qual estão inseridas. Estes estímulos atuam no
                funcionamento do cérebro e na formação de sinapses, onde o cérebro reage
                processando tais informações, sendo capaz de armazená-las.
              </p>
              <p>
                Estou aqui para ser um facilitador da aprendizagem prazerosa, orientando e
                ensinando seu filho a estudar.
              </p>
            </div>
            <Link to="/contato">Reservar</Link>
          </CardOnImage>
          <CardOnImage imgSrc="/elders-drawing.jpg" title="Atendimento à idosos">
            <div className="text">
              <p>
                A intervenção psicopedagógica é bastante positiva para resgatar as perdas
                ocorridas no processo de envelhecimento em idosos. É preciso continuar
                estimulando para minimizar essas perdas cognitivas. O atendimento poderá
                ser na sua residência, caso esteja impossibilitado de ir até o
                local do consultório.
              </p>
            </div>
            <Link to="/contato">Reservar</Link>
          </CardOnImage>
          <CardOnImage imgSrc="/candies.jpeg" title="Atendimento à crianças com deficiências">
            <div className="text">
              <p>
                Facilita muito o aprendizado das crianças com deficiências se trabalhamos com
                materiais mais estruturados e concretos. Aqui no nosso espaço, o objetivo é
                esse: O prazer de aprender brincando.
              </p>
              <p>
                A aprendizagem pode ser mais significativa quando ocorre a interdisciplinaridade,
                diferentes saberes e conhecimentos, trabalhados de maneira interligada nas diversas
                áreas e disciplinas de conhecimento.
              </p>
            </div>
            <Link to="/contato">Reservar</Link>
          </CardOnImage>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Services;
