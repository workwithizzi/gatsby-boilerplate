// Project Configurations
// - Site Metadata
// - Gatsby Plugins & Configs
const settings = require(`./data/settings/siteMeta`)


module.exports = {
	siteMetadata: {
		title: settings.title,
		description: settings.description,
		author: settings.defaultAuthor,
		siteUrl: settings.manifest.siteUrl,
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
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Open Sans`,
						variants: [`300`, `300i`, `400`, `400i`, `600`, `600i`, `700`, `700i`, `800`, `800i`],
					},
				],
			},
		},
		{
			// Used like a 'database' but also includes images
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/data/`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		// {
		// 	resolve: `gatsby-plugin-google-analytics`,
		// 	options: {
		// 		trackingId: settings.googleAnalyticsId,
		// 	},
		// },
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
				plugins: [
					`gatsby-remark-relative-images`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 1000,
							// Don't turn the image into a link to it's original
							linkImagesToOriginal: false,
							withWebp: true,
						},
					},
					{
						resolve: `gatsby-remark-copy-linked-files`,
						options: {
							ignoreFileExtensions: [`png`, `jpg`, `jpeg`],
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: settings.manifest.name,
				short_name: settings.manifest.shortName,
				start_url: `/`,
				background_color: settings.manifest.backgroundColor,
				theme_color: settings.manifest.themeColor,
				display: settings.manifest.display,
				icon: settings.manifest.icon, // Relative to the root of the site.
			},
		},

		`gatsby-plugin-offline`, // Add this plugin after 'manifest'
	],
}
