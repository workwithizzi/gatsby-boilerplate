import React from 'react'

import { Link, Nav, InlineLogo } from './index'
import { settings } from '../../data'


export function Header() {
	return (
		<header>
			{/* Site Logo */}
			<Link to='/'>
				<span className='u_sr_only'>{settings.siteMeta.title}</span>
				<InlineLogo
					fillColor='orange'
					title='SpaceCat'
					desc='This is a cat wit an astronaut helmet'
					style={{width:`8rem`, height:`8rem`}}
				/>
			</Link>

			<Nav />

		</header>
	)
}
