import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { RecentPosts } from "./RecentPosts"

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
	}
`

// TODO: Add fallback for when a section is visible but has not content.

const Sidebar = () => {
	const data = useStaticQuery(_querySidebar)
	const recentPosts = data.sidebarYaml.recentPosts
	const featured = data.sidebarYaml.featured

	return (
		<aside>
			{recentPosts.visible &&
				<section>
					<h3>{recentPosts.heading}</h3>
					<RecentPosts />
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
