import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


const _GET_MENU = graphql`
	query {
		site {
			siteMetadata {
				title
				menuLinks {
					name
					path
				}
			}
		}
	}
`

const Nav = () => {
	const data = useStaticQuery(_GET_MENU)
	const menuLinks = data.site.siteMetadata.menuLinks
	return (
		<nav>
			<ul>
				{menuLinks.map(link => (
					<li key={link.name}>
						<Link to={link.path}>
							{link.name}
						</Link>
					</li>
				))}

			</ul>
		</nav>
	)
}


export { Nav }
