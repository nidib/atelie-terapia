import React from 'react';

import Seo from '../../components/Seo';
import PageTitle from '../../components/PageTitle';
import Quote from '../../components/Quote';
import Map from '../../components/Map';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

import './styles.scss';

const Contact = () => {
  return (
    <>
      <Seo title="Ateliê Terapia | Contato" />
      <PageTitle title="Entre em Contato" />
      <main>
        <section id="quote">
          <Quote text="O verdadeiro sinal de inteligência não é o conhecimento, e sim a imaginação." owner="Albert Einsten" />
        </section>
        <section id="where-to-find-us">
          <div className="location">
            <h3>Como nos encontrar:</h3>
            <ul>
              <li>Rua Traipú, 625 - Pacaembu / SP</li>
              <li><a href="https://wa.me/5511981855338">Whatsapp: [11] 9 8185-5338</a></li>
            </ul>
          </div>
          <div className="map">
            <Map />
          </div>
          <div className="social-medias">
            <h3>Nossas redes sociais:</h3>
            <p>
              Facebook:
              {' '}
              <a href="https://www.facebook.com/Atelieterapiaandreabidin/">@atelieterapiaandreabidin</a>
            </p>
            <p>
              Instagram:
              {' '}
              <a href="https://www.instagram.com/Atelieterapiaandreabidin/">@atelieterapiaandreabidin</a>
            </p>
            <p>
              E-mail:
              {' '}
              <a href="mailto:atendimentoatelieterapia@gmail.com">atelieterapiaandreabidin@gmail.com</a>
            </p>
          </div>
        </section>
        <section id="entre-em-contato">
          <h2>Entre em Contato</h2>
          <Form />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
