import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { FirebaseContext } from 'context/Firebase/context';
import UserPanelTemplate from 'templates/UserPanelTemplate/UserPanelTemplate';
import Card from 'components/molecules/Card/Card';
import H1 from 'components/atoms/H1/H1';

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

const InstitutionPanel = () => {
  const data = useStaticQuery(graphql`
    query {
      allPet {
        edges {
          node {
            id
            description
            lead
            name
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
            institution {
              id
              email
              city
            }
          }
        }
      }
    }
  `);

  const [institutionId, setInstitutionId] = useState('');
  const { user, firebase } = useContext(FirebaseContext);

  useEffect(() => {
    if (firebase && user) {
      if (user.isInstitution === true) {
        const { email } = user;
        firebase.getInstitutionId({ email }).then(querySnapshot => {
          setInstitutionId(querySnapshot.docs[0].id);
        });
      }
    }
  }, [firebase]);

  return (
    <UserPanelTemplate>
      <PetsWrapper>
        <H1>Do adopcji</H1>
        {data.allPet.edges
          .filter(edge => edge.node.institution.id === institutionId)
          .map(edge => (
            <Link key={edge.node.id} to={`/pet/${edge.node.id}`}>
              <Card
                petImage={edge.node.localImage.childImageSharp.fluid}
                name={edge.node.name}
                sex={edge.node.filters.sex}
              />
            </Link>
          ))}
      </PetsWrapper>
    </UserPanelTemplate>
  );
};

export default InstitutionPanel;
