import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const AboutWrapper = styled.div`
  padding: 31px 35px 37px 35px;
  position: relative;
  width: 100%;
  z-index: 1;

  ${({ theme }) => theme.mq.tablet} {
    width: 50%;
  }

  ::before {
    counter-increment: step;
    content: counter(step);
    position: absolute;
    top: -30%;
    font-size: 260px;
    font-family: ${({ theme }) => theme.font.family.libre};
    color: rgba(255, 255, 255, 0.5);
    z-index: -1;
  }

  ${({ odd }) =>
    odd &&
    css`
      grid-row: counter(step);
      justify-self: start;
      text-align: right;

      ::before {
        right: -5%;
      }
    `}

  ${({ even }) =>
    even &&
    css`
      grid-row: counter(step);
      justify-self: end;

      ::before {
        left: -5%;
      }
    `}
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.font.size.l};
  font-size: ${({ theme }) => theme.font.weight.semiBold};
  margin-bottom: 18px;
  z-index: 2;
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.s};
  font-size: ${({ theme }) => theme.font.weight.light};
  z-index: 2;
`;

const Step = ({ heading, content, ...props }) => (
  <AboutWrapper {...props}>
    <H3>{heading}</H3>
    <Paragraph>{content}</Paragraph>
  </AboutWrapper>
);

Step.propTypes = {
  heading: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Step;
