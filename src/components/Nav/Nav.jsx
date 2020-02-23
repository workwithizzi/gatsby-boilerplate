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

const _Item = ({title, path}) => (
	<li>
		<Link to={path}>
			{title}
		</Link>
	</li>
)

const Nav = () => {
	const data = useStaticQuery(_queryMenu)
	return (
		<nav role="navigation">

			<ul>
				{data.mainNavYaml.menu.map(item => (
					<_Item title={item.title} path={item.path} key={item.path}/>
				))}

			</ul>

		</nav>
	)
}


export { Nav }
