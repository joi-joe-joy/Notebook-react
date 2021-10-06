import React, { FC } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import { Favorites } from '../pages/Favorites'
import { Home } from '../pages/Home'
import { MyNotes } from '../pages/MyNotes'
import { NotePage } from '../pages/NotePage'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { PrivateRoute } from './PrivateRoute'
import { ROUTE_NAMES } from './routeNames.const'

export const Routing: FC = () => {
	return (
		<Router>
			<Layout>
				<Route exact path={ROUTE_NAMES.HOME} component={Home} />
				<PrivateRoute path={ROUTE_NAMES.MY_NOTES} component={MyNotes} />
				<PrivateRoute path={ROUTE_NAMES.FAVORITES} component={Favorites} />
				<Route path={ROUTE_NAMES.NOTE_ID} component={NotePage} />
				<Route path={ROUTE_NAMES.SIGN_UP} component={SignUp} />
				<Route path={ROUTE_NAMES.SIGN_IN} component={SignIn} />
			</Layout>
		</Router>
	)
}
