import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BookmarkWrappper = styled.button`
  padding: 12px 0px;
  border-radius: 20px 20px 0 0;
  border: none;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.primary : theme.primaryDark};
  font-size: ${({ theme }) => theme.font.size.m};
  font-weight: ${({ theme }) => theme.font.weight.extraBold};
  height: 45px;
  width: 160px;
  cursor: pointer;
`;

const Bookmark = ({ label, isActive, ...props }) => (
  <BookmarkWrappper {...props} isActive={isActive}>
    {label}
  </BookmarkWrappper>
);

Bookmark.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Bookmark;
