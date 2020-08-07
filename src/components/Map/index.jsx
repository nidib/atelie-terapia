import React from 'react';

import './styles.scss';

const Map = () => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.860133774676!2d-46.66671504834738!3d-23.53753246652529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5818dd865765%3A0x3bfe5a6ffde76ab0!2sRua%20Traip%C3%BA%2C%20625%20-%20Pacaembu%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001235-000!5e0!3m2!1spt-BR!2sbr!4v1596827187580!5m2!1spt-BR!2sbr"
      frameBorder="0"
      allowFullScreen=""
      aria-hidden="false"
      title="Nossa localização"
    />
  );
};

export default Map;
