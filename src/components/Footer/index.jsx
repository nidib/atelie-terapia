import React from 'react';
import { Link } from 'gatsby';

import { siteMap } from '../../data';

import './styles.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul>
          <li className="site-map">
            <h3>Mapa do Site</h3>
            <ul>
              {
                siteMap.map((link) => {
                  return (
                    <li key={link.id}>
                      <Link to={link.href} activeClassName="active">{link.name}</Link>
                    </li>
                  );
                })
              }
              <li>
                <a href="http://atelieterapia.com.br/">Arteterapia</a>
              </li>
              <li>
                <a href="#" className="disabled">Loja (Em breve)</a>
              </li>
            </ul>
          </li>
          <li className="contact-info">
            <h3>Informações para Contato</h3>
            <ul>
              <li>
                Email:&nbsp;
                <a href="mailto:atendimentoatelieterapia@gmail.com">atendimentoatelieterapia@gmail.com</a>
              </li>
              <li>
                Whatsapp:&nbsp;
                <a href="https://wa.me/5511981855338">[11] 9 8185-5338</a>
              </li>
            </ul>
          </li>
          <li className="social-medias">
            <h3>Redes Sociais</h3>
            <ul>
              <li>
                Facebook:&nbsp;
                <a href="https://www.facebook.com/Atelieterapiaandreabidin/">@atelieterapiaandreabidin</a>
              </li>
              <li>
                Instagram:&nbsp;
                <a href="https://www.instagram.com/atelieterapiaandreabidin/">@atelieterapiaandreabidin</a>
              </li>
            </ul>
          </li>
        </ul>
        <hr />
        <div className="owners">
          <div className="copy">
            <p>&copy; 2020 | Andréa Bidin</p>
            <p>Alguns direitos reservados</p>
          </div>
          <div className="created-by">
            <p>Criado com ♥</p>
            <p>
              Por
              {' '}
              <a href="https://richardbidin.com">
                Richard Bidin
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
