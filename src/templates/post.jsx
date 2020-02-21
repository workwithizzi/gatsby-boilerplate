// Blog (single) post page-template:

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


const PostPageTemplate = ({ data }) => {
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


export default PostPageTemplate
