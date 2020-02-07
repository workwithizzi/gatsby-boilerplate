import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Nav } from "./Nav"
import { InlineLogo } from "./svgs/InlineLogo"
// import logo from "../images/logo.svg"


const _GET_TITLE = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`

const Header = ({ withSearch }) => {
	const { site } = useStaticQuery(_GET_TITLE)

	return (
		<header>
			{/* Site Logo */}
			<Link to="/">
				{site.siteMetadata.title}
				{/* Div around logo is temporary */}
				<div style={{height: `100px`, width: `100px`, color:`#000`}}>
					<InlineLogo
						fillColor="orange"
						title="SpaceCat"
						desc="This is a cat wit an astronaut helmet"
					/>
				</div>
			</Link>

			<Nav />

			{/* Search */}
			{ withSearch &&
				<form role="search">
					<label>
						Search
						<input type="search"/>
					</label>
					<button type="submit">Submit</button>
				</form>
			}

		</header>
	)
}


Header.propTypes = {
	withSearch: PropTypes.bool,
}

Header.defaultProps = {
	withSearch: true,
}

export { Header }
