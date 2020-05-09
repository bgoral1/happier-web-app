import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Button from 'components/atoms/Button/Button';
import logo from 'images/logo_happier_default.svg';

const StyledLogoLink = styled(Link)`
  display: block;
  width: 176px;
  height: 50px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 100%;
`;

const NavigationWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.font.family.montserrat};
  height: 320px;
  width: 100vw;
  margin: 0 auto;
  padding: 20px 30px;

  ul {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;
  }

  li {
    list-style: none;
    color: ${({ theme }) => theme.accent};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    font-size: ${({ theme }) => theme.font.size.m};
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.grey100};
  }
`;

const Navigation = () => (
  <>
    <StyledLogoLink to="/" />
    <NavigationWrapper>
      <ul>
        <li>O programie</li>
        <li>Do adopcji</li>
        <li>Instytucje</li>
        <li>Kontakt</li>
      </ul>
      <Button secondary reverse>
        Zaloguj się
      </Button>
    </NavigationWrapper>
  </>
);

export default Navigation;
