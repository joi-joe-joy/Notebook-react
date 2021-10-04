import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTE_NAMES } from '../routing/routeNames.const'

const Nav = styled.nav`
	padding: 1em;
	background: #f5f4f0;

	@media (max-width: 700px) {
		padding-top: 64px;
	}

	@media (min-width: 700px) {
		position: fixed;
		width: 220px;
		height: calc(100% - 64px);
		overflow-y: scroll;
	}
`

const NavList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	line-height: 2;

	a {
		text-decoration: none;
		font-weight: bold;
		font-size: 1.1em;
		color: #333;
		transition: 0.3s ease;
	}

	a:visited {
		color: #333;
	}

	a:hover,
	a:focus {
		color: #0077cc;
	}
`

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
