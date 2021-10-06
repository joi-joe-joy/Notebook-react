import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { MENU } from './Navigation.const'
import { Nav, NavList } from './Navigation.styles'

export const Navigation: FC = () => {
	return (
		<Nav>
			<NavList>
				{MENU.map(({ path, title }) => (
					<li key={title}>
						<Link to={path}>{title}</Link>
					</li>
				))}
			</NavList>
		</Nav>
	)
}
