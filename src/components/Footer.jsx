import React from 'react'
import {v4 as uuid} from 'uuid'

import { Link } from '.'
import { settings } from '../../data'


export function Footer() {
	// const data = useStaticQuery(_queryFooter)
	const nav = settings.footer.navigation
	const social = settings.footer.social

	return (
		<footer>

			{nav.visible &&
				<section>
					<h3>{nav.heading}</h3>
					<ul>
						{nav.links.map(i => (
							<li key={uuid()}>
								<Link to={i.link} label={i.label} />
							</li>
						))}
					</ul>
				</section>
			}

			{social.visible &&
				<section>
					<h3>{social.heading}</h3>
					<ul>
						{social.links.map(i => (
							<li key={uuid()}>
								<Link to={i.link} label={i.label} />
							</li>
						))}
					</ul>
				</section>
			}

			<section>
				Built with
				{` `}
				<a href='https://www.gatsbyjs.org'>Gatsby</a>
			</section>
		</footer>
	)
}
