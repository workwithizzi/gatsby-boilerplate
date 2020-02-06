import React from "react"
import { Link } from "gatsby"


const Sidebar = () => {
	return (
		<aside>
			<section>
				<h2>Sidbar Section</h2>
				<ul>
					<li><a href="#">External Link</a></li>
					<li><a href="#">External Link</a></li>
					<li><a href="#">External Link</a></li>
				</ul>
			</section>
			<section>
				<h2>Sidbar Section</h2>
				<ul>
					<li>
						<p><Link to="#">Related Article</Link></p>
						<p>Article Description</p>
					</li>
					<li>
						<p><Link to="#">Related Article</Link></p>
						<p>Article Description</p>
					</li>
				</ul>
			</section>
		</aside>
	)
}


export { Sidebar }
