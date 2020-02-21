/* eslint-disable react/prefer-stateless-function */
// Blog post page-template:
// Create Pages using 'gatsby-node.js' when '.md'
// files are added to the '/src/posts/' directory

import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout/Layout"


export const _queryPage = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date
			}
			html
		}
	}
`


const PostTemplate = ({ data }) => {
	const page = data.markdownRemark
	return (
		<Layout title={page.frontmatter.title}>
			<pre>Post Template</pre>
			<hr />
			<h1>{page.frontmatter.title}</h1>
			<p>{page.frontmatter.date}</p>
			<div dangerouslySetInnerHTML={{
				__html: page.html,
			}} />
		</Layout>
	)
}


export default PostTemplate
