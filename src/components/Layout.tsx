import React, { FC } from 'react'
import styled from 'styled-components'
import { Header } from './Header'
import { Navigation } from './Navigation'

// Стили компонента
const Wrapper = styled.div`
	@media (min-width: 700px) {
		display: flex;
		position: relative;
		top: 64px;
		flex: auto;
		flex-direction: column;
		height: calc(100% - 64px);
		width: 100%;
	}
`
const Main = styled.main`
	position: fixed;
	height: calc(100% - 185px);
	width: 100%;
	padding: 1em;
	overflow-y: scroll;

	@media (min-width: 700px) {
		flex: 1;
		margin-left: 220px;
		height: calc(100% - 64px);
		width: calc(100% - 220px);
	}
`

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
