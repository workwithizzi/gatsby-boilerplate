// Basic page structure
import React from "react"
import PropTypes from "prop-types"

import { Seo, Header, Sidebar, Footer } from "./index"
import skipStyles from "./layoutSkiplink.module.sass"


const Layout = ({ withSidebar, title, description, meta, author, children }) => {
	return (
		<>
			<Seo
				title={title}
				description={description}
				meta={meta}
				author={author}
			/>

			{/* Accessibility Skiplink */}
			<a className={skipStyles.container} href="#scroll-main">
				Jump to main content.
			</a>

			<Header />

			<main id="scroll-main" role="main">
				{children}
			</main>

			{ withSidebar && <Sidebar /> }

			<Footer />

		</>
	)
}


Layout.propTypes = {
	title: PropTypes.node.isRequired,
	children: PropTypes.node.isRequired,
	withSidebar: PropTypes.bool,
}

Layout.defaultProps = {
	withSidebar: false,
}

export { Layout }
