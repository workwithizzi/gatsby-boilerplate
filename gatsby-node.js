// Implement Gatsby's Node APIs in this file.
// See: https://www.gatsbyjs.org/docs/node-apis/
// TODO: Add kabob function to make sure slugs and paths are written properly.

const path = require(`path`)


module.exports.onCreateNode = ({ node, actions }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {

		let slug = path.basename(node.fileAbsolutePath, `.md`)
		let fullSlug = `/${slug}`

		// Home Page
		if (node.frontmatter.template === `home`) {
			slug = `/`
			fullSlug = `/`
		}

		// Blog Posts
		if (node.frontmatter.template === `post`) {
			fullSlug = `/posts${fullSlug}`
		}

		// Do the things
		createNodeField({
			node,
			name: `slug`,
			value: slug,
		})
		createNodeField({
			node,
			name: `fullSlug`,
			value: fullSlug,
		})

	}
}



module.exports.createPages = async({ graphql, actions }) => {
	const { createPage } = actions
	const res = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
							fullSlug
						}
						frontmatter {
							template
						}
					}
				}
			}
		}
	`)

	res.data.allMarkdownRemark.edges.forEach((edge) => {
		const template = edge.node.frontmatter.template

		createPage({
			component: path.resolve(`./src/templates/${template}.jsx`),
			path: edge.node.fields.fullSlug,
			context: {
				slug: edge.node.fields.slug,
				fullSlug: edge.node.fields.fullSlug,
			},
		})
	})
}
