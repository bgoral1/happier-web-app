import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const MenuWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0;
  margin: 0;
  width: 100%;
  text-align: center;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
    justify-content: space-between;
  }

  li {
    list-style: none;
    color: ${({ theme }) => theme.accent};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    font-size: ${({ theme }) => theme.font.size.m};
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.grey100};

    ${({ theme }) => theme.mq.desktop} {
      border-bottom: none;
    }

    a {
      color: inherit;
    }
  }
`;

const Menu = () => (
  <MenuWrapper>
    <li>
      <Link to="/">O programie</Link>
    </li>
    <li>
      <Link to="/pets">Do adopcji</Link>
    </li>
    <li>
      <Link to="/">Instytucje</Link>
    </li>
    <li>
      <Link to="/contact">Kontakt</Link>
    </li>
  </MenuWrapper>
);

export default Menu;
