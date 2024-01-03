
import React from 'react';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <li className="gallery-item" onClick={onClick}>
      <img src={src} alt={alt} className="gallery-item-image" />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
