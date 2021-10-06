import { useApolloClient, useMutation } from '@apollo/client'
import React, { FC, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { UserForm } from '../../components/UserForm'
import { SIGNUP_USER } from '../../gql/mutation'
import { ROUTE_NAMES } from '../../routing/routeNames.const'
import { AuthType } from '../../types/auth.enum'

export const SignUp: FC = () => {
	const history = useHistory()
	const client = useApolloClient()
	const [signUp, { loading, error }] = useMutation(SIGNUP_USER, {
		onCompleted: (data) => {
			localStorage.setItem('token', data.signUp)
			client.writeData({ data: { isLoggedIn: true } })
			history.push(ROUTE_NAMES.HOME)
		},
	})

	useEffect(() => {
		document.title = 'Sign Up — Notebook'
	})

	return (
		<>
			<UserForm formType={AuthType.SIGN_UP} action={signUp} />
			{loading && <p>Loading...</p>}
			{error && <p>Error signing up!</p>}
		</>
	)
}
