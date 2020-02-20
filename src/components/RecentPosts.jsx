// Archive component that queries for data
// with Gatsby's useStaticQuery component
// See: https://www.gatsbyjs.org/docs/use-static-query/


import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


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
						title
						slug
					}
				}
			}
		}
	}
`


const RecentPosts = () => {
	const data = useStaticQuery(_queryPosts)

	return (
		<>
			<pre>RecentPosts Component</pre>
			<ul>
				{data.allMarkdownRemark.edges.map(edge => (
					<li key={edge.node.frontmatter.slug}>
						<Link to={`/posts${edge.node.frontmatter.slug}`}>
							{edge.node.frontmatter.title}
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}


export { RecentPosts }
