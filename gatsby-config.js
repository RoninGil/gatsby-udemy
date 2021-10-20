/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path:`.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Recipes Udemy Training',
    author: '@RoninGil',
    description: 'The best recipes site ever made!',
    person: {
      name: "Carlos Javier Gil Romero",
      age: 24
    },
    simpleData: ['item 1', 'item 2'],
    complexData: [
      {desc: 'This is an object inside array', date: 'Today xd', id:'123abc'},
      {desc: 'This is another object 222222', date: 'Tomorrow xddd', id:'456def'}
  ]
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["400"],
            },
            {
              family: "Inconsolata",
              variants: ["400", "500", "600", "700"],
            },
          ],
        }
      },
    }
  ],
}
