import React from 'react';
import PropTypes from 'prop-types';
import { Oval as LoaderSpinner } from 'react-loader-spinner';

const Loader = ({ color, height, width }) => {
  return <LoaderSpinner color={color} height={height} width={width} />;
};

Loader.propTypes = {
  color: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
};

Loader.defaultProps = {
  color: '#00BFFF',
  height: 50,
  width: 50,
};

export default Loader;
