import styled from 'styled-components'

export const Button = styled.button`
	display: block;
	padding: 10px 20px 7px;
	border: none;
	border-radius: 5px;
	font-size: 18px;
	color: #fff;
	background-color: #0077cc;
	cursor: pointer;
	transition: 0.3s ease;

	:hover {
		opacity: 0.8;
	}

	:active {
		background-color: #005fa3;
	}
`

export const ExtendedButton = styled(Button)`
	width: 100%;
`

export const ButtonAsLink = styled.button`
	padding: 0;
	font: inherit;
	text-decoration: underline;
	border: none;
	background: none;
	color: #0077cc;
	cursor: pointer;
	transition: 0.3s ease;

	:hover,
	:active {
		color: #004499;
	}
`
