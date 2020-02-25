// Responsive Nav component
// Includes nav toggle button and basic responsive styling

import React, { Component } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { OpenIcon, CloseIcon } from "./index"
import styles from "./nav.module.sass"


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

const _Menu = ({ className }) => {
	const data = useStaticQuery(_queryMenu)

	return (
		<ul id="mainMenu" className={className}>
			{data.mainNavYaml.menu.map(item => (
				<li key={item.path}>
					<Link to={item.path}>{item.title}</Link>
				</li>
			))}
		</ul>
	)
}


// Using react to conditionally render which menu button to show
// Using css to hide/show the menu depending on state so that the
// menu will always be accessible for screen-readers and SEO
class NavResponsive extends Component {
	state = {
		showMenu: false,
	}
	render() {

		const _menuClass = this.state.showMenu ? (
			styles.mainMenu + styles.isActive
		) : (
			styles.mainMenu
		)

		return (
			<nav className={styles.nav} role="navigation">

				{/* Responsive Button */}
				<button
					type="button"
					aria-expanded="false"
					aria-controls="mainMenu"
					className={styles.buttonToggle}
					onClick={() => {
						this.setState({ showMenu: !this.state.showMenu })
					}}
				>
					{this.state.showMenu ? (
						<>
							<span className="sr-only">Close Menu</span>
							<CloseIcon />
						</>
					) : (
						<>
							<span className="sr-only">Open Menu</span>
							<OpenIcon />
						</>
					)}
				</button>

				<_Menu className={_menuClass} />

			</nav>
		)
	}
}


export { NavResponsive }
