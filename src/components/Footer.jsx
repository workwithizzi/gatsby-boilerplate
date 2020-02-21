import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


// const _queryMenu = graphql`
// 	query {
// 		allMarkdownRemark {
// 			edges {
// 				node {
// 					excerpt
// 					fields {
// 						slug
// 					}
// 					frontmatter {
// 						date(formatString: "MMMM DD, YYYY")
// 						title
// 						template
// 					}
// 				}
// 			}
// 		}
// 	}
// `


const Footer = () => {
	// const data = useStaticQuery(_queryMenu)
	// const pages = data.allMarkdownRemark.edges

	return (
		<footer>
			<section>
				<h3>Dynamic Pages</h3>
				<ul>
					{/* { _listPages() } */}

					{/* { pages.map(({ node }) => (
						<li><a href={node.fields.slug}>{node.frontmatter.title}</a></li>
					))} */}
				</ul>
			</section>
			<section>
				<h2>Footer Nav Title</h2>
				<ul>
					<li><a href="#">External Link</a></li>
					<li><a href="#">External Link</a></li>
					<li><Link to="/">Internal Link</Link></li>
					<li><Link to="/">Internal Link</Link></li>
				</ul>
			</section>
			<section>
				<h2>Footer Credits</h2>
				Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</section>
		</footer>
	)
}


export { Footer }
