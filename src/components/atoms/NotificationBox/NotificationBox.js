import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import iconClose from 'images/icons/icon_close.svg';

const NotificationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 14vh;
  right: 3vh;
  width: 260px;
  min-height: 60px;
  margin: 0;
  padding: 6px 6px 16px 16px;
  box-sizing: border-box;
  font-size: 14px;
  background-color: #fac314;
  color: #222;
  max-width: 100%;
  border-radius: 5px;
  box-shadow: 0 10px 26px 0 rgba(58, 78, 88, 0.41),
    0 8px 7px 0 rgba(58, 78, 88, 0.36);
  z-index: 2000;

  h4 {
    margin-bottom: 10px;
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
  }
`;

const ButtonIconWrapper = styled(ButtonIcon)`
  width: 20px;
  height: 20px;
  padding: 5px;
  align-self: flex-end;
  margin-bottom: 0;
`;

const NotificationBox = ({ header, closeNotification, children }) => (
  <NotificationWrapper>
    <ButtonIconWrapper icon={iconClose} onClick={closeNotification} />
    <h4>{header}</h4>
    {children}
  </NotificationWrapper>
);

NotificationBox.propTypes = {
  header: PropTypes.string.isRequired,
  closeNotification: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default NotificationBox;
