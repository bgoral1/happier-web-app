import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const LabelWrappper = styled.div`
  position: absolute;
  width: 90%;
  padding: 7px 20px 7px 34px;
  border-radius: 0px 50px 50px 0px;
  border: none;
  background-color: ${({ theme }) => theme.accent};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
  }

  h2 {
    color: ${({ theme }) => theme.white};
    font-size: ${({ theme }) => theme.font.size.m};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }

  ${({ toRight }) =>
    toRight &&
    css`
      border-radius: 50px 0px 0px 50px;
      right: 0;
      text-align: right;
    `}
`;

const Label = ({ text, ...props }) => (
  <LabelWrappper {...props}>
    <h2>{text}</h2>
  </LabelWrappper>
);

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Label;
