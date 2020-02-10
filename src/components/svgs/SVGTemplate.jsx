import React from "react"
import PropTypes from "prop-types"


const SVGTemplate = ({
	fillColor, title, desc, focusable, role,
	titleId, ariaHidden, className }) => {
	return (
		<svg
			aria-labelledby={titleId}
			aria-hidden={ariaHidden}
			className={className}
			focusable={focusable}
			role={role}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 640 512"
		>

			{title && <title id={titleId}>{title}</title> }
			{desc && <desc>{desc}</desc>}

			<path fill={fillColor}>
				<rect width="300" height="100" />
			</path>
		</svg>
	)
}


SVGTemplate.propTypes = {
	ariaHidden: PropTypes.string,
	className : PropTypes.string,
	desc      : PropTypes.string,
	focusable : PropTypes.string,
	role      : PropTypes.string,
	title     : PropTypes.string,
	titleId   : PropTypes.string,
}

SVGTemplate.defaultProps = {
	ariaHidden: `false`,
	fillColor : `none`,
	focusable : `true`,
	role      : `img`,
	titleId   : `titleId`,
}


export { SVGTemplate }
