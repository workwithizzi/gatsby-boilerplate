import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


const _GET_POSTS = graphql`
	query BlogPostListing {
		allMarkdownRemark(limit: 5, sort: {
			order: DESC,
			fields: [frontmatter___date]
		}) {
			edges {
				node {
					excerpt
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						slug
					}
				}
			}
		}
	}
`


const BlogRoll = () => {
	const data = useStaticQuery(_GET_POSTS)

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
