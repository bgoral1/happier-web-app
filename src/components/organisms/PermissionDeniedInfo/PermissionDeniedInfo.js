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
    <span>UWAGA: Tylko zalogowani użytkownicy mogą zobaczyć tę stronę.</span>
    <span>
      Jeśli jesteś przedstawicielem instytucji chcącej dołączyć do programu,
      skontaktuj się z administratorem strony w celu uzyskania dostępu do
      panelu.
    </span>
    <Link to="/">Wróć do strony głównej</Link>
    <Link to="/login">Masz konto? Zaloguj się</Link>
  </PermissionDeniedWrapper>
);

export default PermissionDeniedInfo;
