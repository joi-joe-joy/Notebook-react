import React, { FC, FormEvent, useState } from 'react'
import { AuthType } from '../../types/auth.enum'
import { ExtendedButton } from '../Button'
import { Form, Wrapper } from './UserForm.styles'
import { FormProps, UserFormProps } from './UserForm.types'

export const UserForm: FC<UserFormProps> = ({ formType, action }) => {
	const [values, setValues] = useState<FormProps>()

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event?.target) {
			setValues({
				...values,
				[event.target.name]: event.target.value,
			})
		}
	}

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		action({
			variables: {
				...values,
			},
		})
	}

	return (
		<Wrapper>
			{formType === AuthType.SIGN_UP ? <h2>Sign Up</h2> : <h2>Sign In</h2>}
			<Form onSubmit={onSubmit}>
				{formType === AuthType.SIGN_UP && (
					<React.Fragment>
						<label htmlFor="username">Username:</label>
						<input
							required
							type="text"
							id="username"
							name="username"
							placeholder="username"
							onChange={onChange}
						/>
					</React.Fragment>
				)}
				<label htmlFor="email">Email:</label>
				<input
					required
					type="email"
					id="email"
					name="email"
					placeholder="Email"
					onChange={onChange}
				/>
				<label htmlFor="password">Password:</label>
				<input
					required
					type="password"
					id="password"
					name="password"
					placeholder="Password"
					onChange={onChange}
				/>
				<ExtendedButton type="submit">Submit</ExtendedButton>
			</Form>
		</Wrapper>
	)
}
