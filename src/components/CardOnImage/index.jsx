import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const CardOnImage = ({
  imgSrc,
  title,
  children,
}) => {
  return (
    <div className="card-on-image">
      <img src={imgSrc} alt="Area de tarefas" />
      <div className="card">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
};

CardOnImage.defaultProps = {
  children: null,
};

CardOnImage.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default CardOnImage;
