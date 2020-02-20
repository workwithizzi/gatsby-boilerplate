import React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout/Layout"


export const _queryPage = graphql`
	query HomePageQuery($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				date
				slug
			}
		}
		site {
			siteMetadata {
				title
			}
		}
	}
`

const IndexPage = ({ data }) => {
	const pageTitle = data.markdownRemark.frontmatter.title
	return (
		<Layout title={pageTitle}>
			<pre>Home Page Template</pre>

			<h1>{pageTitle}</h1>

			<div dangerouslySetInnerHTML={{
				__html: data.markdownRemark.html,
			}} />

		</Layout>
	)
}

export default IndexPage
