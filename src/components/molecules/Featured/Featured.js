import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon/Icon';

const FeaturedWrapper = styled.div`
  height: 120px;
  width: 50%;
  background-color: ${({ theme }) => theme.white};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: ${({ theme }) => theme.font.size.xs};
  border: 1px solid ${({ theme }) => theme.gray200};
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 25%;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 150px;
    svg {
      height: 65px;
      width: auto;
    }
  }

  p {
    padding-top: 10px;
  }
`;

const Featured = ({ iconsrc, text, ...props }) => (
  <FeaturedWrapper {...props}>
    <Icon src={iconsrc}>{text}</Icon>
  </FeaturedWrapper>
);

Featured.propTypes = {
  iconsrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Featured;
