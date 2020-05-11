import React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';

const Icon = ({ src, ...props }) => (
  <div {...props}>
    <SVG src={src} />
  </div>
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Icon;
