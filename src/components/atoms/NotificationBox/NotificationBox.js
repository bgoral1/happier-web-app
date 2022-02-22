import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import iconClose from 'images/icons/icon_close.svg';

const NotificationBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
`;

const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  z-index: 5000;
  top: ${({ modal }) => (modal ? 'calc(50vh - 60px)' : '14vh')};
  right: ${({ modal }) => (modal ? 'calc(50vw - 45%)' : '3vh')};
  width: ${({ modal }) => (modal ? '90%' : '260px')};
  min-height: ${({ modal }) => (modal ? '120px' : '60px')};
  margin: 0;
  padding: 6px 6px 16px 16px;
  font-size: 14px;
  background-color: #fac314;
  color: #222;
  border-radius: 5px;
  box-shadow: 0 10px 26px 0 rgba(58, 78, 88, 0.41),
    0 8px 7px 0 rgba(58, 78, 88, 0.36);

  h3 {
    margin-bottom: 10px;
  }

  h3,
  p {
    align-self: flex-start;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  &:after {
    content: '';
    height: 18px;
    width: 18px;
    position: absolute;
    top: -5%;
    right: 10%;
    z-index: -1;
    transform: rotate(45deg);
    background-color: #fac314;
    display: ${({ modal }) => (modal ? 'none' : 'block')};
  }

  ${({ theme }) => theme.mq.tablet} {
    right: ${({ modal }) => (modal ? 'calc(50vw - 200px)' : '3vh')};
    width: ${({ modal }) => (modal ? '400px' : '260px')};
  }
`;

const ButtonIconWrapper = styled(ButtonIcon)`
  width: 20px;
  height: 20px;
  padding: 5px;
  align-self: flex-end;
  margin-bottom: 0;
`;

export const NotificationModal = ({ ...props }) => (
  <NotificationBackground>
    <NotificationContent modal {...props} />
  </NotificationBackground>
);

export const NotificationBox = ({ ...props }) => (
  <NotificationContent {...props} />
);

const NotificationContent = ({
  header,
  closeNotification,
  children,
  ...props
}) => (
  <NotificationWrapper {...props}>
    {header === '' ? (
      <Loader type="ThreeDots" color="#006766" timeout={10000} />
    ) : (
      <>
        <ButtonIconWrapper icon={iconClose} onClick={closeNotification} />
        <h3>{header}</h3>
        <p>{children}</p>
      </>
    )}
  </NotificationWrapper>
);

NotificationContent.propTypes = {
  header: PropTypes.string.isRequired,
  closeNotification: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

NotificationContent.defaultProps = {
  children: null,
};
