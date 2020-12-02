import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ErrorMsg = styled.div`
  color: ${({ success }) => (success ? '#155724' : '#721c24')};
  background-color: ${({ success }) => (success ? '#d4edda' : '#f8d7da')};
  border-color: ${({ success }) => (success ? '#c3e6cb' : '#f5c6cb')};
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  width: 100%;
  text-align: center;
`;

const MessageBox = ({ success, children }) => (
  <ErrorMsg success={success}>{children}</ErrorMsg>
);

MessageBox.propTypes = {
  success: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default MessageBox;
