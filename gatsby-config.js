// Project Configurations
// - Site Metadata
// - Gatsby Plugins & Configs


module.exports = {
	siteMetadata: {
		title: `Boilerplate Title`,
		description: `This is a site description!`,
		author: `@GrimesClassic`,
	},
	plugins: [
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-boilerplate`,
				short_name: `boilerplate`,
				start_url: `/`,
				background_color: `#333333`,
				theme_color: `#333333`,
				display: `minimal-ui`,
				icon: `src/images/icon-dark.png`, // Relative to the root of the site.
			},
		},
		`gatsby-plugin-offline`, // Add this plugin after 'manifest'
	],
}
