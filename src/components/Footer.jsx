import React from "react"
import { Link } from "gatsby"

const Footer = () => {
	return (
		<footer>
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
