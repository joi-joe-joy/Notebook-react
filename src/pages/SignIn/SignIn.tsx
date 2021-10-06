import { useApolloClient, useMutation } from '@apollo/client'
import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { UserForm } from '../../components/UserForm'
import { SIGNIN_USER } from '../../gql/mutation'
import { ROUTE_NAMES } from '../../routing/routeNames.const'
import { AuthType } from '../../types/auth.enum'

export const SignIn: FC = () => {
	const history = useHistory()
	const client = useApolloClient()
	const [signIn, { loading, error }] = useMutation(SIGNIN_USER, {
		onCompleted: (data) => {
			localStorage.setItem('token', data.signIn)
			client.writeData({ data: { isLoggedIn: true } })
			history.push(ROUTE_NAMES.HOME)
		},
	})

	useEffect(() => {
		document.title = 'Sign In — Notebook'
	})

	return (
		<>
			<UserForm formType={AuthType.SIGN_IN} action={signIn} />
			{loading && <p>Loading...</p>}
			{error && <p>Error signing in!</p>}
		</>
	)
}
