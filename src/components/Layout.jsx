// Basic page structure
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { Seo, Skiplink, Header, Sidebar, Footer } from './index'


export function Layout({
	withSidebar, title, description, meta, author, children,
}) {
	return (
		<Fragment>
			<Seo
				title={title}
				description={description}
				meta={meta}
				author={author}
			/>

			{/* Accessibility Skiplink */}
			<Skiplink />

			<Header />

			<main id='scroll-main' role='main'>
				{children}
			</main>

			{ withSidebar && <Sidebar /> }

			<Footer />

		</Fragment>
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
