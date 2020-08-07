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
          <Quote text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi voluptatibus fugit vero culpa delectus natus maiores expedita non qui iure placeat quas atque, et nisi corporis rerum deleniti ut magni!" />
        </section>
        <section id="services">
          <CardOnImage imgSrc="/kid-drawing.jpg" title="Crianças">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime doloribus,
                nisi exercitationem inventore explicabo accusamus alias magni et cupiditate
                illo voluptatibus, eaque dolorem necessitatibus omnis
                dignissimos vero ex dolor culpa.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum culpa beatae
                recusandae! Distinctio placeat porro eligendi non nobis omnis ut nulla pariatur
                labore, harum. Eius eum asperiores unde voluptatem quia.
              </p>
            </div>
            <Link to="/contato">Reservar</Link>
          </CardOnImage>
          <CardOnImage imgSrc="/elders-drawing.jpg" title="Idosos">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime doloribus,
                nisi exercitationem inventore explicabo accusamus alias magni et cupiditate
                illo voluptatibus, eaque dolorem necessitatibus omnis
                dignissimos vero ex dolor culpa.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum culpa beatae
                recusandae! Distinctio placeat porro eligendi non nobis omnis ut nulla pariatur
                labore, harum. Eius eum asperiores unde voluptatem quia.
              </p>
            </div>
            <Link to="/contato">Reservar</Link>
          </CardOnImage>
          <CardOnImage imgSrc="/candies.jpeg" title="Vícios">
            <div className="text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime doloribus,
                nisi exercitationem inventore explicabo accusamus alias magni et cupiditate
                illo voluptatibus, eaque dolorem necessitatibus omnis
                dignissimos vero ex dolor culpa.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum culpa beatae
                recusandae! Distinctio placeat porro eligendi non nobis omnis ut nulla pariatur
                labore, harum. Eius eum asperiores unde voluptatem quia.
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
