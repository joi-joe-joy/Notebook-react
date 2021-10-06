import { useQuery } from '@apollo/client'
import React, { FC } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { IS_LOGGED_IN } from '../../gql/query'
import { ROUTE_NAMES } from '../routeNames.const'
import { PrivateRouteProps } from './PrivateRoute.types'

export const PrivateRoute: FC<RouteProps & PrivateRouteProps> = ({
	component: Component,
	...rest
}) => {
	const { loading, error, data } = useQuery(IS_LOGGED_IN)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error!</p>

	return (
		<Route
			{...rest}
			render={(props) =>
				data.isLoggedIn ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: ROUTE_NAMES.SIGN_IN,
							state: { from: props.location },
						}}
					/>
				)
			}
		/>
	)
}
