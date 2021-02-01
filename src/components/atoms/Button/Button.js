import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  background-color: ${({ theme, dismiss }) =>
    dismiss ? theme.gray100 : theme.accent};
  width: ${({ width }) => width || '280px'};
  height: ${({ height }) => height || '50px'};
  border: none;
  border-radius: 50px;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.s};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme, dismiss }) => (dismiss ? theme.black : theme.white)};
  text-transform: uppercase;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  margin: 15px 0;

  :hover {
    box-shadow: 0 10px 20px -15px #000;
    background-color: ${({ theme, dismiss }) =>
      dismiss ? theme.white : theme.accentLight};
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
