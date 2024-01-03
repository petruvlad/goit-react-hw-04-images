
import React from 'react';
import PropTypes from 'prop-types';
import '../components/styles.css';
const Modal = ({ isOpen, onClose, imageUrl, alt }) => {
  if (!isOpen || !imageUrl || !alt) return null;

  const handleClose = () => {
    onClose();
  };

  return (
    <div className="overlay" onClick={handleClose}>
      <div className="modal">
        <img src={imageUrl} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
};

export default Modal;
