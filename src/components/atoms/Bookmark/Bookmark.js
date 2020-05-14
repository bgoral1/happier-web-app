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

  ${({ theme }) => theme.mq.tablet} {
    border-radius: 0;
    height: 100%;
    width: 255px;
    font-size: ${({ theme }) => theme.font.size.l};
  }

  ${({ theme }) => theme.mq.large} {
    width: 340px;
    font-size: ${({ theme }) => theme.font.size.xl};
  }
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
