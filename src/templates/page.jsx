import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout/Layout"


export const _queryPage = graphql`
	query PageQuery($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date
				slug
				sidebar
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`

const DefaultPage = ({ data }) => {
	const pageTitle = data.markdownRemark.frontmatter.title
	const sidebar = data.markdownRemark.frontmatter.sidebar
	return (
		<Layout title={pageTitle} withSidebar={sidebar}>
			<pre>Default Page Template</pre>

			<h1>{pageTitle}</h1>

			<div dangerouslySetInnerHTML={{
				__html: data.markdownRemark.html,
			}} />

		</Layout>
	)
}

export default DefaultPage
