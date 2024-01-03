
import React from 'react';
import PropTypes from 'prop-types';
import '../components/styles.css';

const ImageGallery = ({ children }) => {
  return (
    <ul className="gallery">
      {React.Children.map(children, (child, index) => (
        <li key={index} className="gallery-item">
          {child}
        </li>
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  children: PropTypes.node,
};

export default ImageGallery;
