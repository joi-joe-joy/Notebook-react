import React, { FC } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Layout } from '../components/Layout/Layout'
import {
	EditNote,
	Favorites,
	Home,
	MyNotes,
	NewNote,
	NotePage,
	SignIn,
	SignUp,
} from '../pages'
import { PrivateRoute } from './PrivateRoute'
import { ROUTE_NAMES } from './routeNames.const'

export const Routing: FC = () => {
	return (
		<Router>
			<Layout>
				<Route exact path={ROUTE_NAMES.HOME} component={Home} />
				<PrivateRoute path={ROUTE_NAMES.MY_NOTES} component={MyNotes} />
				<PrivateRoute path={ROUTE_NAMES.FAVORITES} component={Favorites} />
				<Route path={ROUTE_NAMES.NOTE} component={NotePage} />
				<Route path={ROUTE_NAMES.SIGN_UP} component={SignUp} />
				<Route path={ROUTE_NAMES.SIGN_IN} component={SignIn} />
				<PrivateRoute path={ROUTE_NAMES.NEW_NOTE} component={NewNote} />
				<PrivateRoute path={ROUTE_NAMES.EDIT_NOTE} component={EditNote} />
			</Layout>
		</Router>
	)
}
