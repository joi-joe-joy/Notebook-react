import React, { FC } from 'react'
import { SvgLogo } from '../../icons/SvgLogo'
import { HeaderBar, LogoText } from './Header.styles'

export const Header: FC = () => {
	return (
		<HeaderBar>
			<SvgLogo height={40} width={40} />
			<LogoText>Notebook</LogoText>
		</HeaderBar>
	)
}
