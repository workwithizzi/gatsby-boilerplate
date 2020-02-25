import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Nav, NavResponsive, InlineLogo } from "./index"
import styles from "./header.module.sass"


const _queryMeta = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`

const Header = () => {
	const { site } = useStaticQuery(_queryMeta)

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
			</Link>

			{/* <Nav /> */}
			<NavResponsive />

		</header>
	)
}

export { Header }
