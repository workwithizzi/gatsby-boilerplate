// Archive component that queries for data
// with Gatsby's useStaticQuery component
// See: https://www.gatsbyjs.org/docs/use-static-query/


import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


const _GET_POSTS = graphql`
	query {
		allMarkdownRemark(limit: 5, sort: {
			order: DESC,
			fields: [frontmatter___date]
		}) {
			edges {
				node {
					frontmatter {
						title
						slug
					}
				}
			}
		}
	}
`


const ListPosts = () => {
	const data = useStaticQuery(_GET_POSTS)

	return (
		<>
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


export { ListPosts }
