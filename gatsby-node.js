const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const petTemplate = path.resolve('src/templates/PetTemplate/PetTemplate.js');

  return graphql(`
    {
      allPet {
        edges {
          node {
            id
            description
            lead
            name
            localImage {
              publicURL
            }
            institution {
              name
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }
    result.data.allPet.edges.forEach(pet => {
      createPage({
        path: `/pet/${pet.node.id}`,
        component: petTemplate,
        context: pet.node,
      });
    });
  });
};
