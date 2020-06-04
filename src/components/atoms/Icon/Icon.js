import React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';
import StyledLink from 'components/atoms/StyledLink/StyledLink';

const Icon = ({ src, children, to, ...props }) => (
  <>
    {to ? (
      <StyledLink to={to} {...props}>
        <SVG src={src} />
        <p>{children}</p>
      </StyledLink>
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  to: PropTypes.string,
};

Icon.defaultProps = {
  children: '',
  to: null,
};
export default Icon;
