/* eslint-disable react/prefer-stateless-function */
// Blog post page-template:
// Create Pages using 'gatsby-node.js' when '.md'
// files are added to the '/src/posts/' directory

import React, { Component } from "react"
import { graphql } from "gatsby"

import { Layout } from "./Layout"


export default class PostTemplate extends Component {
	render() {
		const { markdownRemark } = this.props.data
		// const { location } = this.props

		return (
			<Layout title="test">
				<h1>{markdownRemark.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{
					__html: markdownRemark.html,
				}} />
			</Layout>
		)
	}
}

// Get this data from the '.md' file
export const query = graphql`
	query PostListQuery($slug: String!) {
		markdownRemark(frontmatter: {
			slug: {
				eq: $slug
			}
		}) {
			html
			frontmatter {
				title
				date
				slug
			}
		}
	}
`
