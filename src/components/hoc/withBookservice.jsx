import React from 'react'
import { Consumer } from '../Context'

const withBookService = () => (Wrapped) => {
	return (props) => {
		return (
			<Consumer>
				{
					(bookService) => {
						return <Wrapped { ...props }
							bookService={ bookService }/>
					}
				}
			</Consumer>
		)
	}
}

export default withBookService
