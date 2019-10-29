import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App';
import ErrorBoundry from './components/ErrorBoundry'
import BookstoreService from './services/bookstore-service'
import { Provider as BookProvider } from './components/Context'

import store from './store'

import './sass/app.sass'

const bookService = new BookstoreService()

ReactDOM.render(
	// redux store access first of all
	<Provider store={ store }>
		{/* to cover a lot of comps errors */}
		<ErrorBoundry>
			{/* custom service Provider as ContextAPI */}
			<BookProvider value={ bookService }>
				<Router>
					<App />
				</Router>
			</BookProvider>
		</ErrorBoundry>
	</Provider>,
	document.getElementById('root')
);