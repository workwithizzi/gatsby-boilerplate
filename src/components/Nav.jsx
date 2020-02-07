import React, { Component } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { OpenIcon } from "./svgs/OpenIcon"
import { CloseIcon } from "./svgs/CloseIcon"


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


const _Menu = () => {
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


// Using react to conditionally render which menu button to show
// Using css to hide/show the menu depending on state so that the
// menu will always be accessible for screen-readers and SEO

class Nav extends Component {
	constructor(props) {
		super(props)

		// When the button is clicked, change the value
		this.state = { addClass: false }
	}

	// this is the function that changes the state onClick event
	_toggleClassChange = e => {
		this.setState({ addClass: !this.state.addClass })
	}

	render() {
		// These classes are added to <nav> and <button> on first render
		const navClasses = [`c-nav`]
		const btnClasses = [`nav__toggle`]
		// When button is clicked:
		if (this.state.addClass) {
			navClasses.push(`is-active`)
			btnClasses.push(`is_active`)
		}
		return (
			<nav id="js-nav" role="navigation" className={navClasses.join(` `)}>
				{/* Responsive Nav Buttons */}
				<div className="l-nav__toggle">
					<button
						id="js-toggle-menu"
						type="button"
						aria-expanded="false"
						aria-controls="main-menu"
						className={btnClasses.join(` `)}
						// onClick, toggle state and toggle 'is-active' classes
						onClick={this._toggleClassChange}
					>
						{!this.state.addClass ? (
							<div>
								<span>Open Menu</span>
								<OpenIcon />
							</div>
						) : (
							<div>
								<span>Close Menu</span>
								<CloseIcon />
							</div>
						)}
					</button>
				</div>

				{/* Main Menu */}
				{/* Use css to hide/show menu for accessibility and SEO */}
				<_Menu />
			</nav>
		)
	}
}


export { Nav }
