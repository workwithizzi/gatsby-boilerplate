// Template used for the blog-index (blogroll) page.

import React from 'react'
import { graphql } from 'gatsby'
import {v4 as uuid} from 'uuid'

import { Link, Layout } from '../components'


export const _queryPage = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date
			}
			html
		}
		allMarkdownRemark(
			limit: 5,
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { template: { eq: "post" } } }
		) {
			edges {
				node {
					excerpt
					fields {
						fullSlug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						template
						sidebar
					}
				}
			}
		}
	}
`


export default function BlogIndexTemplate({ data }) {
	const page = data.markdownRemark
	const posts = data.allMarkdownRemark.edges
	const sidebar = page.frontmatter.sidebar

	return (
		<Layout title={page.frontmatter.title} withSidebar={sidebar}>

			<h1>{page.frontmatter.title}</h1>
			<p>{page.frontmatter.date}</p>
			<div dangerouslySetInnerHTML={{
				__html: page.html,
			}} />

			<hr />

			{/* List the post's excerpts here */}
			{posts.map(({ node }) => (
				<article key={uuid()}>
					<Link to={node.fields.fullSlug}>
						<h2>{node.frontmatter.title}</h2>
					</Link>
					<p>{node.frontmatter.date}</p>
					<p>{node.excerpt}</p>
					<Link to={node.fields.fullSlug}>Read More</Link>
				</article>
			))}

		</Layout>
	)
}
