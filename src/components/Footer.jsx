import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const _queryFooter = graphql`
	query {
		footerYaml {
			navigation {
				visible
				heading
				links {
					title
					path
				}
			}
			social {
				visible
				heading
				links {
					title
					path
				}
			}
		}
	}
`


const _Item = ({title, path}) => (
	<li>
		<Link to={path}>
			{title}
		</Link>
	</li>
)


const Footer = () => {
	const data = useStaticQuery(_queryFooter)
	const nav = data.footerYaml.navigation
	const social = data.footerYaml.social

	return (
		<footer>

			{nav.visible &&
				<section>
					<h3>{nav.heading}</h3>
					<ul>
						{nav.links.map(item => (
							<_Item title={item.title} path={item.path} key={item.path} />
						))}
					</ul>
				</section>
			}

			{social.visible &&
				<section>
					<h3>{social.heading}</h3>
					<ul>
						{social.links.map(item => (
							<li key={item.path}><a href={item.path}>{item.title}</a></li>
						))}
					</ul>
				</section>
			}

			<section>
				Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</section>
		</footer>
	)
}


export { Footer }
