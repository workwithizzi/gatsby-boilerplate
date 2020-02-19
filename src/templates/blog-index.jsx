import React, { Component }  from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Layout } from "../components/Layout"
import { BlogRoll } from "../components/BlogRoll"


// Get this data from the '.md' file
export const query = graphql`
	query BlogPageQuery($slug: String!) {
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


class BlogIndexTemplate extends Component {
	render() {
		const { markdownRemark } = this.props.data

		return (
			<Layout title="Blog">
				<h1>{markdownRemark.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{
					__html: markdownRemark.html,
				}} />
				<hr />
				<p>This is the BlogIndexTemplate.</p>
				<hr />
				<BlogRoll />
			</Layout>
		)
	}
}

// const BlogIndexTemplate = () => {
// 	return (
// 		<Layout title="Blog" withSidebar>
// 			<h1>Blog Index Template jsx</h1>
// 			<p>This is the main body.</p>
// 			<hr />
// 			<BlogRoll />
// 		</Layout>
// 	)
// }


export default BlogIndexTemplate
