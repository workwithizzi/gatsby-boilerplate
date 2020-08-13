// Responsive Nav component
// Includes nav toggle button and basic responsive styling
import React, { Fragment, useState } from 'react'
import {v4 as uuid} from 'uuid'

import { Link, OpenIcon, CloseIcon } from '../index'
import styles from './nav.module.sass'
import { settings } from '../../../data'


// Using react to conditionally render which menu button to show
// Using css to hide/show the menu depending on state so that the
// menu will always be accessible for screen-readers and SEO
export function Nav() {
	const [showMenu, setShowMenu] = useState(false)

	// Hide/show menu button with CSS classes
	let _menuClass = styles.mainMenu
	showMenu && (
		_menuClass += styles.isActive
	)

	return (
		<nav className={styles.nav} role='navigation'>

			{/* Responsive Button */}
			<button
				type='button'
				aria-expanded='false'
				aria-controls='mainMenu'
				className={styles.buttonToggle}
				onClick={() => {
					setShowMenu(!showMenu)
				}}
			>
				{showMenu ? (
					<Fragment>
						<span className='sr-only'>Close Menu</span>
						<CloseIcon />
					</Fragment>
				) : (
					<Fragment>
						<span className='sr-only'>Open Menu</span>
						<OpenIcon />
					</Fragment>
				)}
			</button>

			{/* Loop through menu items */}
			<ul id='mainMenu' className={_menuClass}>
				{settings.navMenu.map(i => (
					<li key={uuid()}>
						<Link to={i.link} label={i.label} />
					</li>
				))}
			</ul>

		</nav>
	)
}

// :::::::::::::::::;

// Basic Nav without responsive buttons/styling
// export function Nav() {
// 	const data = useStaticQuery(_queryMenu)
// 	return (
// 		<nav role='navigation'>
// 			<ul id='mainMenu'>
// 				{data.mainNavYaml.menu.map(item => (
// 					<li key={item.path}>
// 						<Link to={item.path}>{item.title}</Link>
// 					</li>
// 				))}
// 			</ul>
// 		</nav>
// 	)
// }
