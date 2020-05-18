import React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const Icon = ({ src, children, to, ...props }) => (
  <>
    {to ? (
      <Link to={to} {...props}>
        <SVG src={src} />
        <p>{children}</p>
      </Link>
    ) : (
      <div {...props}>
        <SVG src={src} />
        <p>{children}</p>
      </div>
    )}
  </>
);

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.string,
  to: PropTypes.string,
};

Icon.defaultProps = {
  children: '',
  to: null,
};
export default Icon;
