import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {v4 as uuid} from 'uuid'

import { Link } from '.'
import { settings } from '../../data'


const _querySidebar = graphql`
	query {
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

// TODO: Add fallback for when a section is visible but has no content.

export function Sidebar() {
	const recentPosts = settings.sidebar.recentPosts
	const featured = settings.sidebar.featured
	const data = useStaticQuery(_querySidebar)
	const posts = data.allMarkdownRemark.edges

	return (
		<aside>

			{recentPosts.visible &&
				<section>
					<h3>{recentPosts.heading}</h3>
					<ul>
						{/* TODO: Use the 'count' object from yaml to
						determine how many posts to show instead of the
						graphql filter */}
						{posts.map(i => (
							<li key={uuid()}>
								<Link
									to={i.node.fields.fullSlug}
									label={i.node.frontmatter.title}
								/>
							</li>
						))}
					</ul>
				</section>
			}

			{featured.visible &&
				<section>
					<h3>{featured.heading}</h3>
					<ul>
						{featured.links.map(i => (
							<li key={uuid()}><a href={i.link}>{i.label}</a></li>
						))}
					</ul>
				</section>
			}

		</aside>
	)
}
