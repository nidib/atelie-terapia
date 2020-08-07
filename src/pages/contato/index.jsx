import React from 'react';

import Seo from '../../components/Seo';
import PageTitle from '../../components/PageTitle';
import Quote from '../../components/Quote';
import Map from '../../components/Map';
import Footer from '../../components/Footer';

import './styles.scss';

const Contact = () => {
  return (
    <>
      <Seo title="Ateliê Terapia | Contato" />
      <PageTitle title="Entre em Contato" />
      <main>
        <section id="quote">
          <Quote text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis saepe suscipit deleniti autem odio, illo, doloribus laboriosam dicta reiciendis possimus. Esse similique quas rerum. Vel veniam explicabo nulla quas similique." />
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
              <a href="mailto:artesbidin@gmail.com">artesbidin@gmail.com</a>
            </p>
          </div>
        </section>
        <section id="entre-em-contato">
          <h2>Entre em Contato</h2>
          <form className="container">
            <fieldset>
              <legend>Nome:</legend>
              <label htmlFor="name">
                <input type="text" id="name" required />
              </label>
            </fieldset>
            <fieldset>
              <legend>Email:</legend>
              <label htmlFor="email">
                <input type="email" id="email" required />
              </label>
            </fieldset>
            <fieldset>
              <legend>Assunto:</legend>
              <select id="subject" required defaultValue="">
                <option value="" disabled>Selecione um atendimento</option>
                <option value="b">b</option>
                <option value="c">c</option>
              </select>
            </fieldset>
            <fieldset>
              <legend>Mensagem:</legend>
              <label htmlFor="message">
                <textarea id="message" required />
              </label>
            </fieldset>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
