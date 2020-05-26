const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  const PetPageTemplate = path.resolve(
    'src/templates/PetPageTemplate/PetPageTemplate.js'
  );

  return graphql(`
    {
      allPet {
        edges {
          node {
            id
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
        component: PetPageTemplate,
        context: { petId: pet.node.id },
      });
    });
  });
};
