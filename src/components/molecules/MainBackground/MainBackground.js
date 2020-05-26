import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pawsMainImg from 'images/pawsMain.svg';
import pawsMainImgRev from 'images/pawsMainRev.svg';
import BackgroundImg from 'components/atoms/BackgroundImg/BackgroundImg';

const MainWrapper = styled.main`
  width: 100%;
  min-height: 300px;
  background-color: ${({ theme }) => theme.primary};
  padding: 15px 20px 22px 20px;

  ${({ theme }) => theme.mq.tablet} {
    background-image: url(${pawsMainImg});
    background-repeat: no-repeat;
    background-position: 97% 95%;
    background-size: 15%;
  }

  ${({ theme }) => theme.mq.desktop} {
    background-size: 20%;
    background-position: ${({ activePet }) =>
      activePet === 'dog' ? '97% 95%' : '3% 95%'};
    background-image: ${({ activePet }) =>
      activePet === 'dog' ? `url(${pawsMainImg})` : `url(${pawsMainImgRev})`};
    position: relative;
    min-height: 400px;
    width: 70%;
    margin-right: auto;
    margin-left: auto;

    :before,
    :after {
      content: ' ';
      height: 100%;
      position: absolute;
      top: 0;
      width: 15px;
    }

    :before {
      box-shadow: -15px 0 15px -15px inset;
      left: -15px;
    }

    :after {
      box-shadow: 15px 0 15px -15px inset;
      right: -15px;
    }
  }
`;

const MainBackground = ({ activePet, className, children }) => (
  <>
    <BackgroundImg />
    <MainWrapper activePet={activePet} className={className}>
      {children}
    </MainWrapper>
  </>
);

MainBackground.propTypes = {
  activePet: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

MainBackground.defaultProps = {
  activePet: '',
  className: '',
  children: [],
};

export default MainBackground;
