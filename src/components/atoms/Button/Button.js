import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  width: ${({ width }) => width || '280px'};
  height: ${({ height }) => height || '50px'};
  border: none;
  border-radius: 50px;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.white};
  text-transform: uppercase;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  margin: 15px 0;

  :hover {
    box-shadow: 0 10px 20px -15px #000;
  }
`;

const Button = ({ className, ...props }) => (
  <StyledButton {...props} className={className} />
);

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
