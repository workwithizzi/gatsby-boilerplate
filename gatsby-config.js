// Project Configurations
// - Site Metadata
// - Gatsby Plugins & Configs


module.exports = {
	siteMetadata: {
		title: `Boilerplate Title`,
		description: `This is a site description!`,
		author: `@GrimesClassic`,
		menuLinks: [
			{
				name: `Home`,
				path: `/`,
			},
			{
				name: `Blog`,
				path: `/blog`,
			},
			{
				name: `Sidebar Page`,
				path: `/sidebar-page`,
			},
			{
				name: `Dropdown`,
				path: `/`,
				childMenuLinks: [
					{
						name: `Link One`,
						path: `/`,
					},
					{
						name: `Link Two`,
						path: `/`,
					},
				],
			},
		],
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
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `posts`,
				path: `${__dirname}/src/posts/`,
				ignore: [`**/.*`], // ignore files starting with a dot
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
