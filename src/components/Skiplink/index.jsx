// Accessibility Skiplink
import React from 'react'
import PropTypes from 'prop-types'

import style from './skiplink.module.sass'


export function Skiplink() {
	return (
		<a className={style.container} href='#scroll-main'>
			Jump to main content.
		</a>
	)
}
