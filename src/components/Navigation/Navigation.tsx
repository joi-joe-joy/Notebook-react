import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { ROUTE_NAMES } from '../../routing/routeNames.const'
import { Nav, NavList } from './Navigation.styles'

export const Navigation: FC = () => {
	return (
		<Nav>
			<NavList>
				<li>
					<Link to={ROUTE_NAMES.HOME}>Home</Link>
				</li>
				<li>
					<Link to={ROUTE_NAMES.MY_NOTES}>My Notes</Link>
				</li>
				<li>
					<Link to={ROUTE_NAMES.FAVORITES}>Favorites</Link>
				</li>
			</NavList>
		</Nav>
	)
}
