// Basic page structure
import React from "react"
import PropTypes from "prop-types"

import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { Footer } from "./Footer"
import { SEO } from "./Seo"


const Layout = ({ title, children }) => {
	return (
		<>
			<SEO title={title} />
			{/* Accessibility Skiplink */}
			<a href="#scroll-main">
					Jump to main content.
			</a>

			<Header />

			<main id="scroll-main" role="main">
				{children}
			</main>

			<Sidebar />

			<Footer />

		</>
	)
}


Layout.propTypes = {
	title: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
}


export { Layout }
