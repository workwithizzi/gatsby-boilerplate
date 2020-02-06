import React from "react"


const LogoInlineSvg = ({ fillColor, title, desc, titleId, ariaHidden, className }) => {
	return (
		<svg
			aria-labelledby={titleId}
			aria-hidden={ariaHidden}
			className={className}
			focusable="false"
			role="img"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 640 512"
		>

			{title && <title id={titleId}>{title}</title> }
			{desc && <desc>{desc}</desc>}

			<g>
				<path fill={fillColor} d="M448,0A160,160,0,1,0,608,160,159.99917,159.99917,0,0,0,448,0Zm96,176a96,96,0,0,1-192,0V48l64,64h64l64-64ZM285.03125,59.22852l-39.71484-16.5586L228.75781,2.957a5.325,5.325,0,0,0-9.53906,0l-16.5625,39.71289-39.71094,16.5586a5.336,5.336,0,0,0,0,9.541l39.71094,16.56055,16.5625,39.71094a5.32345,5.32345,0,0,0,9.53906,0l16.5586-39.71094,39.71484-16.56055a5.336,5.336,0,0,0,0-9.541Z" opacity="0.4"></path>
				<path fill={fillColor} d="M291.89062,194.30273v.01172C256.05469,199.65625,200.10156,217.57227,160,277.95312V192A96.105,96.105,0,0,0,64,96a32,32,0,0,0,0,64,32.04169,32.04169,0,0,1,32,32V448a64.06328,64.06328,0,0,0,64,64H336a15.9908,15.9908,0,0,0,16-16V480a32.00158,32.00158,0,0,0-32-32H288l128-96V496a15.9908,15.9908,0,0,0,16,16h32a15.9908,15.9908,0,0,0,16-16V316.77539A160.63434,160.63434,0,0,1,448,320C371.4375,320,307.62109,266.14453,291.89062,194.30273ZM480,112H416L352,48V176a96,96,0,0,0,192,0V48Zm-72,80a16,16,0,1,1,16-16A15.9908,15.9908,0,0,1,408,192Zm80,0a16,16,0,1,1,16-16A15.9908,15.9908,0,0,1,488,192Z"></path>
			</g>
		</svg>
	)
}


// TODO: Add query to get the theme color from 'gatsby-plugin-manifest' option and make it the default fillColor

LogoInlineSvg.defaultProps = {
	fillColor: `none`,
	titleId: `headerLogo`,
	ariaHidden: `false`,
}


export { LogoInlineSvg }
