// Implement Gatsby's Node APIs in this file.
// See: https://www.gatsbyjs.org/docs/node-apis/

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)


// Create blog posts based on .md files in 'src/posts'
exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	return new Promise((resolve, reject) => {

		graphql(`
			{
				allMarkdownRemark {
					edges {
						node {
							fields {
								slug
							}
							frontmatter {
								slug
								template
							}
						}
					}
				}
			}
		`).then(result => {
			if (result.errors) {
				result.errors.forEach(e => console.error(e.toString()))
				return Promise.reject(result.errors)
			}

			result.data.allMarkdownRemark.edges.forEach(({node}) => {
				let fullSlug = node.fields.slug
				if (node.frontmatter.slug) {
					fullSlug = node.frontmatter.slug

					if (node.frontmatter.template === `post` ) {
						fullSlug = `/posts${node.frontmatter.slug}`
					}
				}

				createPage({
					path: fullSlug,
					component: path.resolve(
						`./src/templates/${node.frontmatter.template}.jsx`
					),
					context: {
						slug: node.frontmatter.slug,
					},
				})
			})
			resolve()

		})
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}
