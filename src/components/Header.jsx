import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { Nav } from "./Nav"
import { LogoInlineSvg } from "./LogoInlineSvg"
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

const Header = () => {
	const { site } = useStaticQuery(_GET_TITLE)

	return (
		<header>
			{/* Site Logo */}
			<Link to="/">
				{site.siteMetadata.title}
				{/* Div around logo is temporary */}
				<div style={{height: `100px`, width: `100px`, color:`#000`}}>
					<LogoInlineSvg
						fillColor="orange"
						title="SpaceCat"
						desc="This is a cat wit an astronaut helmet"
					/>
				</div>
			</Link>

			<Nav />

			{/* Search */}
			<form class="search" role="search">
				<label>
					Search
					<input type="search"/>
				</label>
				<button type="submit">Submit</button>
			</form>
		</header>
	)
}


export { Header }
