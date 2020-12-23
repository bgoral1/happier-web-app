import styled from 'styled-components';

export const PetsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.white};

  h1,
  p {
    width: 100%;
    text-align: center;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: calc(100% - 110px);
    margin-left: 110px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: 'header header';

    h1,
    p {
      grid-area: header;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'header header header';
  }

  ${({ theme }) => theme.mq.large} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'header header header header';
  }

  ${({ theme }) => theme.mq.veryLarge} {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 'header header header header header';
  }
`;
