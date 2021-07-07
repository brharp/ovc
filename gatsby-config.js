/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Ontario Veterinary College',
    description: 'The oldest veterinary school in Canada.',
    slogan: 'A world leader in advancing veterinary science, learning and research to improve the lives of animals, people and our planet.',
    author: 'The OVC Authors',
    menu: [
      { title: "Home",     path: "/" },
      { title: "Research", path: "/research" },
      { title: "Alumni",   path: "/alumni" },
      { title: "Hospital", path: "https://ovc.uoguelph.ca/hsc" },
      { title: "People",   path: "/experts" },
      { title: "Programs", path: "http://www.ovc.uoguelph.ca/research/en/researchprograms/programsofresearchstrength.asp?_mid_=1314" },
      { title: "Intranet", path: "https://uoguelphca.sharepoint.com/sites/OVC" },
    ],
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
        },
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-7739681-2',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ontario Veterinary College`,
        short_name: `OVC`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000000`,
        display: `browser`,
        icon: `src/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: process.env.DRUPAL_BASEURL,
        apiBase: process.env.DRUPAL_APIBASE,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NRSSDKW",
        includeInDevelopment: false,
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      }
    }
  ],
}
