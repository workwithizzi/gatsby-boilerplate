import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Nav } from "../Nav"
import { InlineLogo } from "../svgs/InlineLogo"

import styles from "./header.module.sass"


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
				<span className="u_sr_only">{site.siteMetadata.title}</span>
				{/* Div around logo is temporary */}
				<InlineLogo
					fillColor="orange"
					title="SpaceCat"
					desc="This is a cat wit an astronaut helmet"
					className={styles.logo}
				/>
				{/* <div style={{height: `100px`, width: `100px`, color:`#000`}}>
				</div> */}
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
