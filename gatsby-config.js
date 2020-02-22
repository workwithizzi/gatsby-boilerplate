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
			resolve: `gatsby-plugin-sass`,
			options: {
				includePaths: [
					`node_modules/luscious/core`,
					`node_modules/modularscale-sass`,
					`src/styles`,
				],
			},
		},
		`gatsby-transformer-yaml`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			// Yaml files, used for site-settings
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `settings`,
				path: `${__dirname}/settings/`,
			},
		},
		{
			// .md files, used for site content
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/content/`,
			},
		},
		{
			// Used for markdown
			resolve: `gatsby-transformer-remark`,
			options: {
				// CommonMark mode (default: true)
				commonmark: true,
				// Footnotes mode (default: true)
				footnotes: true,
				// Pedantic mode (default: true)
				pedantic: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: [],
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
