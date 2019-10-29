import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { withBookService } from './hoc'
import { HomePage, CardPage } from './pages'
import Header from './Header'

const App = () => {
	return (
		<main role="main" className="container">
			<Header numItems={5} total={210} />
			<Switch>
				<Route path='/' component={ HomePage } exact />
				<Route path='/card/' component={ CardPage } />
			</Switch>
		</main>
	)
}

export default withBookService()(App)
