import React from "react"
import PropTypes from "prop-types"


const OpenIcon = ({
	fillColor, title, desc, focusable, role,
	titleId, ariaHidden, className }) => {
	return (
		<svg
			aria-labelledby={titleId}
			aria-hidden={ariaHidden}
			className={className}
			focusable={focusable}
			role={role}
			data-icon="hamburger"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 320 512"
		>

			{title && <title id={titleId}>{title}</title> }
			{desc && <desc>{desc}</desc>}

			<path
				fill={fillColor}
				d="M464 256H48a48 48 0 0 0 0 96h416a48 48 0 0 0 0-96zm16 128H32a16 16 0 0 0-16 16v16a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64v-16a16 16 0 0 0-16-16zM58.64 224h394.72c34.57 0 54.62-43.9 34.82-75.88C448 83.2 359.55 32.1 256 32c-103.54.1-192 51.2-232.18 116.11C4 180.09 24.07 224 58.64 224zM384 112a16 16 0 1 1-16 16 16 16 0 0 1 16-16zM256 80a16 16 0 1 1-16 16 16 16 0 0 1 16-16zm-128 32a16 16 0 1 1-16 16 16 16 0 0 1 16-16z"
			/>
		</svg>
	)
}


OpenIcon.propTypes = {
	ariaHidden: PropTypes.string,
	className : PropTypes.string,
	desc      : PropTypes.string,
	focusable : PropTypes.string,
	role      : PropTypes.string,
	title     : PropTypes.string,
	titleId   : PropTypes.string,
}

OpenIcon.defaultProps = {
	ariaHidden: `true`,
	fillColor : `currentColor`,
	focusable : `true`,
	role      : `img`,
	titleId   : `OpenIconId`,
}


export { OpenIcon }
