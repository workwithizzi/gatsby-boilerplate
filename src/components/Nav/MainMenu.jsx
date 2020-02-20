import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, useStaticQuery } from "gatsby"

import styles from "./nav.module.sass"


const _queryMenu = graphql`
	query {
		site {
			siteMetadata {
				title
				menuLinks {
					name
					path
					childMenuLinks {
						name
						path
					}
				}
			}
		}
	}
`


const MainMenu = ({className, id}) => {
	const data = useStaticQuery(_queryMenu)
	// const menuLinks = data.site.siteMetadata.menuLinks

	const _Item = ({name, path, external}) => (
		<li key={name}>
			<Link to={path}>
				{name}
			</Link>
		</li>
	)

	return (
		<ul className={className} id={id}>
			<_Item name="Home" path="/" />
			<_Item name="Blog" path="/blog" />
			<_Item name="Sidebar" path="/sidebar-page" />
			{/* Added the menu statically just to remove
			the 'unique-key' warning temporarily */}

			{/* {menuLinks.map(link => (
				!link.childMenuLinks ? (
					<_Item name={link.name} path={link.path} />
				) : (
					<ul key={link.name} className={styles.subnav}>
						{link.name}
						{link.childMenuLinks.map(link => (
							<_Item name={link.name} path={link.path} />
						))}
					</ul>
				)
			))} */}
		</ul>
	)
}


MainMenu.propTypes = {
	className: PropTypes.string,
	id       : PropTypes.string,
}


export { MainMenu }
