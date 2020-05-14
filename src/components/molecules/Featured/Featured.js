import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon/Icon';

const FeaturedWrapper = styled.div`
  height: 120px;
  width: 50%;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: ${({ theme }) => theme.font.size.xs};
  border: 1px solid ${({ theme }) => theme.grey200};

  ${({ theme }) => theme.mq.tablet} {
    width: 25%;
  }

  p {
    padding-top: 10px;
  }
`;

const Featured = ({ iconsrc, text, ...props }) => (
  <FeaturedWrapper {...props}>
    <Icon src={iconsrc} />
    <p>{text}</p>
  </FeaturedWrapper>
);

Featured.propTypes = {
  iconsrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Featured;
