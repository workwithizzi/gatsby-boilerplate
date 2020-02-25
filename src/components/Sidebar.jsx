import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"


const _querySidebar = graphql`
	query {
		sidebarYaml {
			recentPosts {
				visible
				heading
				count
			}
			featured {
				visible
				heading
				links {
					title
					path
				}
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
					fields {
						fullSlug
					}
					frontmatter {
						title
					}
				}
			}
		}
	}
`

// TODO: Add fallback for when a section is visible but has not content.

const Sidebar = () => {
	const data = useStaticQuery(_querySidebar)
	const recentPosts = data.sidebarYaml.recentPosts
	const posts = data.allMarkdownRemark.edges
	const featured = data.sidebarYaml.featured

	return (
		<aside>

			{recentPosts.visible &&
				<section>
					<h3>{recentPosts.heading}</h3>
					<ul>
						{/* TODO: Use the 'count' object from yaml to
						determine how many posts to show instead of the
						graphql filter */}
						{posts.map(item => (
							<li key={item.node.fields.fullSlug}>
								<Link to={item.node.fields.fullSlug}>
									{item.node.frontmatter.title}
								</Link>
							</li>
						))}
					</ul>
				</section>
			}

			{featured.visible &&
				<section>
					<h3>{featured.heading}</h3>
					<ul>
						{featured.links.map(item => (
							<li key={item.path}><a href={item.path}>{item.title}</a></li>
						))}
					</ul>
				</section>
			}

		</aside>
	)
}


export { Sidebar }
