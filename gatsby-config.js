// Project Configurations
// - Site Metadata
// - Gatsby Plugins & Configs
const fs = require(`fs`)
const yaml = require(`js-yaml`)

const userMeta = fs.readFileSync(`./data/settings/siteMeta/siteMeta.yml`, `utf8`)
const siteMeta = yaml.safeLoad(userMeta)


module.exports = {
	siteMetadata: {
		// Getting meta from the yaml settings so that Netlify users
		// can access it.
		title: siteMeta.title,
		description: siteMeta.description,
		author: siteMeta.defaultAuthor,
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
			// Used like a 'database' but also includes images
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/data/`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
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
							maxWidth: 800,
							// Don't turn the image into a link to it's original
							linkImagesToOriginal: false,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: siteMeta.manifest.name,
				short_name: siteMeta.manifest.shortName,
				start_url: `/`,
				background_color: siteMeta.manifest.backgroundColor,
				theme_color: siteMeta.manifest.themeColor,
				display: siteMeta.manifest.display,
				icon: siteMeta.manifest.icon, // Relative to the root of the site.
			},
		},

		`gatsby-plugin-offline`, // Add this plugin after 'manifest'
		{
			resolve: `gatsby-plugin-netlify-cms`,
			// options: {
			// 	modulePath: `${__dirname}/src/cms/cms.js`,
			// },
		},
		`gatsby-plugin-netlify`, // make sure to keep it last in the array
	],
}
