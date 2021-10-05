import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './components/GlobalStyle'
import { Routing } from './routing'

const uri = process.env.API_URI
const cache = new InMemoryCache()
const client = new ApolloClient({
	uri,
	cache,
	connectToDevTools: true,
})

const App: FC = () => {
	return (
		<ApolloProvider client={client}>
			<GlobalStyle />
			<Routing />
		</ApolloProvider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
