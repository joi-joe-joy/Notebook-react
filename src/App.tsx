import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './components/GlobalStyle'
import { Routing } from './routing'

const App: FC = () => {
	return (
		<div>
			<GlobalStyle />
			<Routing />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
