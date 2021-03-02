/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
	title: 'Ontario Veterinary College',
	description: 'The oldest veterinary school in Canada.',
	author: 'The OVC Authors',
    },
    plugins: [
	`gatsby-plugin-image`,
	`gatsby-plugin-sharp`,
	`gatsby-transformer-sharp`,
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
		name: `src`,
		path: `${__dirname}/src/`,
	    },
	},
	{
	    resolve: `gatsby-source-instagram`,
	    options: {
		username: 'ontvetcollege',
	    },
	},
	{
	    resolve: "gatsby-plugin-google-tagmanager",
	    options: {
		id: "GTM-NRSSDKW",
		includeInDevelopment: false,
	    },
	},
    ],
}
