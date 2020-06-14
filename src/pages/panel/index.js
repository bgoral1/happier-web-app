/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { FirebaseContext } from 'context/Firebase/context';
import UserPanelTemplate from 'templates/UserPanelTemplate/UserPanelTemplate';
import AddInstitution from 'components/organisms/AddInstitution/AddInstitution';
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

const PermissionDeniedWrapper = styled.div`
  width: 50%;
  height: 200px;
  margin: 50px auto;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.grey200};
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

const PanelPage = ({ data }) => {
  const { user, firebase } = useContext(FirebaseContext);
  const [institutionId, setInstitutionId] = useState('');

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
    <>
      {(user === null ||
        (user !== null &&
          user.isAdmin !== true &&
          user.isInstitution !== true)) && (
        <>
          <PermissionDeniedWrapper>
            <span>
              UWAGA: Tylko zweryfikowane instytucje mogą zobaczyć tę stronę.
            </span>
            <span>
              Jeśli jesteś przedstawicielem instytucji chcącej dołączyć do
              programu, skontaktuj się z administratorem strony w celu uzyskania
              dostępu do panelu.
            </span>
            <Link to="/">Wróć do strony głównej</Link>
          </PermissionDeniedWrapper>
        </>
      )}
      {user !== null && (
        <>
          {!!user.isAdmin && <AddInstitution />}
          {!!user.isInstitution && (
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
          )}
        </>
      )}
    </>
  );
};

export const query = graphql`
  {
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
`;

export default PanelPage;
