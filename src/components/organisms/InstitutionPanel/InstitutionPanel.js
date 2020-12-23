import React, { useContext, useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FirebaseContext } from 'context/Firebase/context';
import UserPanelTemplate from 'templates/UserPanelTemplate/UserPanelTemplate';
import Card from 'components/molecules/Card/Card';
import { PetsGrid } from 'components/organisms/PetsGrid/PetsGrid';
import Heading from 'components/atoms/Heading/Heading';

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
      const { email } = user;
      firebase.getInstitutionId({ email }).then(querySnapshot => {
        setInstitutionId(querySnapshot.docs[0].id);
      });
    }
  }, [firebase]);

  //   const [pets, setPets] = useState([]);

  // useEffect(() => {
  //   const unsubscribe = firebase.subscribeToPets({onSnapshot: (snapshot) => {
  //     const snapshotPets = [];
  //     snapshot.forEach(doc => snapshotPets.push(doc.id);
  //     setPets(snapshotPets);
  //   }})

  //   return () => {
  //     if(unsubscribe) {
  //       unsubscribe();
  //     }
  //   }
  //  }, []);

  return (
    <UserPanelTemplate>
      <Heading>Do adopcji</Heading>
      <PetsGrid>
        {data.allPet.edges
          .filter(edge => edge.node.institution.id === institutionId)
          .map(edge => (
            <Card
              key={edge.node.id}
              petImage={edge.node.localImage.childImageSharp.fluid}
              name={edge.node.name}
              sex={edge.node.filters.sex}
              linkTo={edge.node.id}
            />
          ))}
      </PetsGrid>
    </UserPanelTemplate>
  );
};

export default InstitutionPanel;
