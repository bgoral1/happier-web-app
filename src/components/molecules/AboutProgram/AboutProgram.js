import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const AboutWrapper = styled.div`
  padding: 31px 35px 37px 35px;
  border: 4px dashed ${({ theme }) => theme.primaryDark};
  background-color: ${({ theme }) => theme.white};
`;

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.font.size.l};
  font-size: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.accent};
  margin-bottom: 18px;
`;

const AboutProgram = ({ className, children }) => (
  <AboutWrapper className={className}>
    {children}
    <H2>About Happier</H2>
    <Paragraph>
      Aenean pharetra enim eu metus mollis bibendum tincidunt in dolor. Fusce
      sollicitudin, metus non consectetur posuere, lorem nunc porttitor nunc,
      nec sagittis tortor mauris ac ex. Fusce imperdiet ex maximus purus
      sollicitudin iaculis. Sed varius viverra egestas. Morbi turpis purus,
      porta sed dignissim in, viverra non nulla. Curabitur ornare sodales velit
      nec mollis. Nulla rutrum, lacus at euismod consectetur, quam lacus luctus
      orci, non volutpat eros lectus at risus.
    </Paragraph>
  </AboutWrapper>
);

AboutProgram.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

AboutProgram.defaultProps = {
  className: '',
  children: [],
};

export default AboutProgram;
