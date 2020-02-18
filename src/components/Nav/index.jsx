import React, { Component } from "react"

import { OpenIcon } from "../svgs/OpenIcon"
import { CloseIcon } from "../svgs/CloseIcon"
import { MainMenu } from "./MainMenu"

import styles from "./nav.module.sass"


// Using react to conditionally render which menu button to show
// Using css to hide/show the menu depending on state so that the
// menu will always be accessible for screen-readers and SEO
class Nav extends Component {
	state = {
		showMenu: false,
	}
	render() {

		const ButtonContent = this.state.showMenu ? (
			<>
				<span className="sr-only">Close Menu</span>
				<CloseIcon />
			</>
		) : (
			<>
				<span className="sr-only">Open Menu</span>
				<OpenIcon />
			</>
		)

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
					{ButtonContent}
				</button>

				<MainMenu id="mainMenu" className={_menuClass} />
			</nav>
		)
	}
}


export { Nav }
