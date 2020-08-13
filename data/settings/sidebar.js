const links = require(`./socialLinks`)

module.exports = {
	recentPosts:{
		visible: true,
		count: `2`,
		heading: `Recent Posts`,
	},
	featured:{
		visible: true,
		heading: `Notable Links`,
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
