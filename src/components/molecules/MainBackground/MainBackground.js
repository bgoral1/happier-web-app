/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pawsMainImg from 'images/pawsMain.svg';
import pawsMainImgRev from 'images/pawsMainRev.svg';
import BackgroundImg from 'components/atoms/BackgroundImg/BackgroundImg';

const MainWrapper = styled.main`
  width: 100%;
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
    min-height: ${({ bigger, indexPage }) =>
      bigger ? (indexPage ? '400px' : '350px') : indexPage ? '300px' : '260px'};
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }

  ${({ theme }) => theme.mq.large} {
    min-height: ${({ bigger, indexPage }) =>
      bigger ? (indexPage ? '450px' : '410px') : indexPage ? '350px' : '290px'};
    width: 70%;

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

const MainBackground = ({
  bigger,
  indexPage,
  activePet,
  className,
  children,
}) => (
  <>
    <BackgroundImg />
    <MainWrapper
      bigger={bigger}
      indexPage={indexPage}
      activePet={activePet}
      className={className}
    >
      {children}
    </MainWrapper>
  </>
);

MainBackground.propTypes = {
  bigger: PropTypes.bool,
  indexPage: PropTypes.bool,
  activePet: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

MainBackground.defaultProps = {
  bigger: false,
  indexPage: false,
  activePet: '',
  className: '',
  children: [],
};

export default MainBackground;
