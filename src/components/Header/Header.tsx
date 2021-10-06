import { useQuery } from '@apollo/client'
import React, { FC } from 'react'
import { Link, useHistory, withRouter } from 'react-router-dom'
import { SvgLogo } from '../../icons/SvgLogo'
import { ROUTE_NAMES } from '../../routing/routeNames.const'
import { ButtonAsLink } from '../Button'
import { IS_LOGGED_IN } from './Header.gql'
import { HeaderBar, LogoText, UserState } from './Header.styles'

const Header: FC = () => {
	const history = useHistory()
	const { data, client } = useQuery(IS_LOGGED_IN)

	const logOut = () => {
		localStorage.removeItem('token')
		client.resetStore()
		client.writeData({ data: { isLoggedIn: false } })
		history.push(ROUTE_NAMES.HOME)
	}

	return (
		<HeaderBar>
			<SvgLogo height={40} width={40} />
			<LogoText>Notebook</LogoText>
			<UserState>
				{data.isLoggedIn ? (
					<ButtonAsLink onClick={logOut}>Logout</ButtonAsLink>
				) : (
					<p>
						<Link to={ROUTE_NAMES.SIGN_IN}>Sign In</Link> or{' '}
						<Link to={ROUTE_NAMES.SIGN_UP}>Sign Up</Link>
					</p>
				)}
			</UserState>
		</HeaderBar>
	)
}

export default withRouter(Header)
