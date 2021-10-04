import React, { FC } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { Favorites } from '../pages/Favorites'
import { Home } from '../pages/Home'
import { MyNotes } from '../pages/MyNotes'
import { ROUTE_NAMES } from './routeNames.const'

export const Routing: FC = () => {
	return (
		<Router>
			<Layout>
				<Route exact path={ROUTE_NAMES.HOME} component={Home} />
				<Route path={ROUTE_NAMES.MY_NOTES} component={MyNotes} />
				<Route path={ROUTE_NAMES.FAVORITES} component={Favorites} />
			</Layout>
		</Router>
	)
}
