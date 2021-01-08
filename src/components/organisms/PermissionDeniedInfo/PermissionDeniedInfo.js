import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const PermissionDeniedWrapper = styled.div`
  width: 50%;
  height: 200px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.gray200};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  span {
    text-align: center;
  }
  span:first-child {
    color: ${({ theme }) => theme.accent};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  a:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const PermissionDeniedInfo = () => (
  <PermissionDeniedWrapper>
    <span>NOTE: Only singned-in users can see this page.</span>
    <span>
      If you are a representative of an animal shelter wishing to join the
      program, contact the site administrator in order to gain access to panel.
    </span>
    <Link to="/">Return to home page</Link>
    <Link to="/login">Already a member? Sign in</Link>
  </PermissionDeniedWrapper>
);

export default PermissionDeniedInfo;
