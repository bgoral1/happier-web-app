import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';

const MsgWrapper = styled.div`
  color: ${({ success }) => (success ? '#155724' : '#721c24')};
  background-color: ${({ success }) => (success ? '#d4edda' : '#f8d7da')};
  border: 1px solid;
  border-color: ${({ success }) => (success ? '#c3e6cb' : '#f5c6cb')};
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  text-align: center;
  width: 100%;
`;

const MessageBox = ({ success, children }) => (
  <MsgWrapper success={success}>
    {children === '' ? (
      <Loader
        type="ThreeDots"
        color={`${({ theme }) => theme.secondary}`}
        timeout={15000}
        height={50}
        width={50}
      />
    ) : (
      children
    )}
  </MsgWrapper>
);
MessageBox.propTypes = {
  success: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default MessageBox;
