// Use Gatsby <Link> if the url is local,
// fall back to <a> if it's not

import React from 'react'
import { Link as GatsbyLink } from 'gatsby'


export function Link({to, label, children, ...props}) {
	if (to.startsWith(`/`)) {
		return (
			<GatsbyLink to={to} {...props}>
				{label || children}
			</GatsbyLink>
		)
	} else {
		return (
			<a href={to} {...props}>
				{label || children}
			</a>
		)
	}
}
