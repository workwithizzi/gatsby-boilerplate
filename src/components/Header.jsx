import React from "react"
import { Link } from "gatsby"
import { Nav } from "./Nav"


const Header = () => {
	return (
		<header>
			{/* Site Logo */}
			<Link to="/">
				Site Logo Image
				{/* {data.site.siteMetadata.title} */}
				{/* Brand Logo -- see file for info about props */}
				{/* <Logo /> */}
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
