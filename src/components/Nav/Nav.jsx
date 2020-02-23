// Basic Nav Component
import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"


const _queryMenu = graphql`
	query {
		mainNavYaml {
			menu {
				title
				path
			}
		}
	}
`


const Nav = () => {
	const data = useStaticQuery(_queryMenu)
	return (
		<nav role="navigation">

			<ul id="mainMenu">
				{data.mainNavYaml.menu.map(item => (
					<li key={item.path}>
						<Link to={item.path}>{item.title}</Link>
					</li>
				))}
			</ul>

		</nav>
	)
}


export { Nav }
