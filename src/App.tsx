import {
	ApolloClient,
	ApolloLink,
	ApolloProvider,
	createHttpLink,
	InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/link-context'
import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './components/GlobalStyle'
import { Routing } from './routing'

const uri = process.env.API_URI
const httpLink = createHttpLink({ uri })
const cache = new InMemoryCache()

const authLink: ApolloLink = setContext((_, { headers }) => {
	return {
		headers: {
			...headers,
			authorization: localStorage.getItem('token') || '',
		},
	}
})

const client = new ApolloClient({
	link: authLink.concat(httpLink),
	cache,
	resolvers: {},
	connectToDevTools: true,
})

const data = {
	isLoggedIn: !!localStorage.getItem('token'),
}

cache.writeData({ data })

client.onResetStore(async () => cache.writeData({ data }))

const App: FC = () => {
	return (
		<ApolloProvider client={client}>
			<GlobalStyle />
			<Routing />
		</ApolloProvider>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
