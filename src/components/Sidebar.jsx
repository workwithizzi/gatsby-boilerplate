import React from "react"

import { RecentPosts } from "./RecentPosts"


const Sidebar = () => {
	return (
		<aside>
			<section>
				<h2>Recent Posts</h2>
				<RecentPosts />
			</section>
			<section>
				<h2>External Links</h2>
				<ul>
					<li><a href="#">Link One</a></li>
					<li><a href="#">Link Two</a></li>
					<li><a href="#">Link Three</a></li>
				</ul>
			</section>
		</aside>
	)
}


export { Sidebar }
