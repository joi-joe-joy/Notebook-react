import React, { FC } from 'react'
import { Header } from '../Header/Header'
import { Navigation } from '../Navigation/Navigation'
import { Main, Wrapper } from './Layout.styles'

export const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			<Wrapper>
				<Navigation />
				<Main>{children}</Main>
			</Wrapper>
		</>
	)
}
