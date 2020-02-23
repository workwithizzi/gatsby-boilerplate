// Not using this component right now,
// just leaving it here as an example
// of how to use 'useStaticQuery'

import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


const _queryPosts = graphql`
	query{
		allMarkdownRemark(
			limit: 5,
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { template: { eq: "post" } } }
		) {
			edges {
				node {
					excerpt
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						slug
						template
					}
				}
			}
		}
	}
`

const BlogRoll = () => {
	const data = useStaticQuery(_queryPosts)

	return (
		<>
			{data.allMarkdownRemark.edges.map(edge => (
				<article key={edge.node.frontmatter.slug}>
					<Link to={`/posts${edge.node.frontmatter.slug}`}>
						<h2>{edge.node.frontmatter.title}</h2>
					</Link>
					<p>{edge.node.frontmatter.date}</p>
					<p>{edge.node.excerpt}</p>
					<Link to={`/posts${edge.node.frontmatter.slug}`}>Read More</Link>
				</article>
			))}
		</>
	)
}


export { BlogRoll }
