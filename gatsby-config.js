/* eslint-disable global-require */
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Happier - Aplikacja Wspomagająca Adopcje Psów i Kotów`,
    description: `Happier to aplikacja internetowa wspomagająca proces adopcji zwierząt ze schronisk`,
    author: `Barbara Góral`,
  },
  plugins: [
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require('./firebase.json'),
        types: [
          {
            type: 'Pet',
            collection: 'pets',
            map: doc => ({
              name: doc.name,
              filters: doc.filters,
              species: doc.species,
              lead: doc.lead,
              description: doc.description,
              imageUrl: doc.imageUrl,
              institution___NODE: doc.institution.id,
            }),
          },
          {
            type: 'Institution',
            collection: 'institutions',
            map: doc => ({
              email: doc.email,
              city: doc.city,
            }),
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: { displayName: true },
    },
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-stylelint',
      exclude: /(node_modules|.cache|public)/,
      options: { files: ['**/*.{js,jsx}'] },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        templates: path.join(__dirname, 'src/templates'),
        context: path.join(__dirname, 'src/context'),
        components: path.join(__dirname, 'src/components'),
        images: path.join(__dirname, 'src/assets/images'),
        theme: path.join(__dirname, 'src/theme'),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
<<<<<<< HEAD
        fonts: [`Montserrat:300,400,600,700,800`,`Libre Baskerville:700`],
=======
        fonts: [`Montserrat\:300,400,600,700,800`,`Libre Baskerville\:700`],
>>>>>>> 6d9f046262a35ece06177b2b6c5244350b20b6d5
        display: 'swap'
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Happier - Aplikacja Wspomagajaca Proces Adopcji Zwierząt`,
        short_name: `Happier`,
        start_url: `/`,
        background_color: `#86C6C4`,
        theme_color: `#E92063`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Pet',
        imagePath: 'imageUrl',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
