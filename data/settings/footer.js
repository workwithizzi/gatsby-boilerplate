const links = require(`./socialLinks`)

module.exports = {
	navigation: {
		visible: true,
		heading: `Site Navigation`,
		links: [
			{
				label: `Home`,
				link: `/`,
			},
			{
				label: `Blog`,
				link: `/blog`,
			},
			{
				label: `GraphQL`,
				link: `/___graphql`,
			},
		],
	},
	social: {
		visible: true,
		heading: `Get Social`,
		links: [
			{
				label: `Facebook`,
				link: links.facebook,
			},
			{
				label: `Twitter`,
				link: links.twitter,
			},
			{
				label: `Youtube`,
				link: links.youtube,
			},
		],
	},
}
