import React, { useContext } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import { FirebaseContext } from 'context/Firebase/context';
import UserPanelTemplate from 'templates/UserPanelTemplate/UserPanelTemplate';
import Card from 'components/molecules/Card/Card';
import H1 from 'components/atoms/H1/H1';
import Hamburger from 'components/atoms/Hamburger/Hamburger';

const PetsWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.white};

  > a > div {
    box-shadow: 0 7px 12px rgba(0, 0, 0, 0.2);
  }

  div > div:first-child {
    background-color: ${({ theme }) => theme.primaryDark};
  }

  ${({ theme }) => theme.mq.tablet} {
    width: calc(100% - 110px);
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas: 'header header header';
    margin-left: 110px;

    h1 {
      grid-area: header;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'header header header header';
  }

  ${({ theme }) => theme.mq.veryLarge} {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas: 'header header header header header';
  }
`;

const StyledHamburger = styled(Hamburger)`
  z-index: 1;
  position: absolute;
  right: 20px;
  top: 0;
  background-color: ${({ theme }) => theme.grey200};
  border-radius: 0 0 7px 7px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.white};
  }
  ${({ theme }) => theme.mq.desktop} {
    display: block;
  }
`;

const UserPanel = () => {
  const data = useStaticQuery(graphql`
    query {
      allPublicProfiles {
        edges {
          node {
            id
            petsWatched {
              description
              name
              id
              lead
              filters {
                sex
              }
              localImage {
                childImageSharp {
                  fluid(maxWidth: 320, quality: 90) {
                    ...GatsbyImageSharpFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const { user } = useContext(FirebaseContext);

  const deleteItem = id => console.log(`deleted item ${id}`);

  return (
    <UserPanelTemplate>
      <PetsWrapper>
        <H1>Obserwowane zwierzęta</H1>
        {data.allPublicProfiles.edges
          .filter(edge => edge.node.id === user.userName)
          .map(edge =>
            edge.node.petsWatched.map(pet => (
              <Card
                petImage={pet.localImage.childImageSharp.fluid}
                name={pet.name}
                sex={pet.filters.sex}
                linkTo={pet.id}
                key={pet.id}
              >
                <StyledHamburger
                  onClick={() => deleteItem(pet.id)}
                  isOpen
                  title="Usuń z obserwowanych"
                />
              </Card>
            ))
          )}
      </PetsWrapper>
    </UserPanelTemplate>
  );
};

export default UserPanel;
