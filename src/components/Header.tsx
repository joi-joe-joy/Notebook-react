import React, { FC } from 'react'
import styled from 'styled-components'
import { SvgLogo } from '../icons/SvgLogo'

const HeaderBar = styled.header`
	position: fixed;
	z-index: 1;
	display: flex;
	align-items: center;
	width: 100%;
	height: 64px;
	padding: 0.5em 1em;
	background-color: #fff;
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
`
const LogoText = styled.h1`
	display: inline;
	margin: 0;
	padding: 0;
	padding-left: 15px;
`

export const Header: FC = () => {
	return (
		<HeaderBar>
			<SvgLogo height={40} width={40} />
			<LogoText>Notebook</LogoText>
		</HeaderBar>
	)
}
