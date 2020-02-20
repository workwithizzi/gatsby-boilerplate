import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Layout } from "../components/Layout/Layout"


export const _queryPage = graphql`
	query BlogPageQuery($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date
				slug
			}
		}
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


const BlogIndexTemplate = ({ data }) => {
	const posts = data.allMarkdownRemark.edges

	return (
		<Layout title="Blog" withSidebar>
			<pre>Blog Index Template</pre>

			<h1>{data.markdownRemark.frontmatter.title}</h1>
			<div dangerouslySetInnerHTML={{
				__html: data.markdownRemark.html,
			}} />

			<hr />

			{/* List the posts/summaries here */}
			{posts.map(({ node }) => (
				<article key={node.frontmatter.slug}>
					<Link to={`/posts${node.frontmatter.slug}`}>
						<h2>{node.frontmatter.title}</h2>
					</Link>
					<p>{node.frontmatter.date}</p>
					<p>{node.excerpt}</p>
					<Link to={`/posts${node.frontmatter.slug}`}>Read More</Link>
				</article>
			))}

		</Layout>
	)
}


export default BlogIndexTemplate
