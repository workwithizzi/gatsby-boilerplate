// Blog (single) post page-template:

import React from 'react'
import { graphql } from 'gatsby'

import { Layout } from '../components'


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


export default function PostPageTemplate({ data }) {
	const page = data.markdownRemark
	return (
		<Layout title={page.frontmatter.title}>
			<h1>{page.frontmatter.title}</h1>
			<p>{page.frontmatter.date}</p>
			<div dangerouslySetInnerHTML={{
				__html: page.html,
			}} />
		</Layout>
	)
}
