import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'

import BookListItem from './BookListItem'

import { fetchBooks, bookAddedToCard } from '../actions'
import { withBookService } from './hoc'
import { compose } from '../utils'
import Loader from './Loader';
import ErrorIndicator from './ErrorIndicator'

const BookList = ({ books, onAddedToCard }) => {
	return (
		<ul className="book-list">
			{
				books.map((book) => {
					return (
						<li key={book.id}>
							<BookListItem 
								book={ book }
								onAddedToCard={ () => onAddedToCard(book.id) }
								/>
						</li>
					)
				})
			}
		</ul>
	)
}

class BookListContainer extends Component {

	componentDidMount() {
		this.props.fetchBooks();
	}

		// 2. receive data from service (context hoc withBookService)
		// const { bookService, booksLoaded, booksRequested, booksError } = this.props
		// just to set loading => true, before asking server
		// booksRequested();
		// just to set loading => true, before asking server
		// bookService.getBooks()
		// 	.then((data) => booksLoaded(data))
		// 	.catch((err) => booksError(err))
		// 3. dispatch action to store
		// transfer data from service to store
		// this.props.booksLoaded(data)
		// 4. store calls reducer => reducer gets action BOOKS_LOADED and refreshes books in store

	// 6. re-render with new props
	render() {
		const { books, loading, error, onAddedToCard } = this.props
		
		if (error) {
			return <ErrorIndicator />
		}
		
		if (loading) {
			return <Loader />
		}

		return <BookList books={ books } onAddedToCard={onAddedToCard} />
	}
}

// 5. new book list turns back to Comp => new props trigger render
const mapStateToProps = ({ books, loading, error }) => {
	return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
	const { bookService } = ownProps
	return {
		fetchBooks: fetchBooks(bookService, dispatch),
		onAddedToCard: (id) => dispatch(bookAddedToCard(id))
	}
}


// если мы вместо fn передаем obj,
// то этот obj попадет в качестве 1го аргумента в bindActionCreators
//
// все остальное redux сделает за нас =>
// => обернет booksLoaded в bindActionCreators => new action => to dispatch => to store
// const mapDispatchToProps = {
// 	booksLoaded,
// 	booksRequested,
// 	booksError
// }

// const mapDispatchToProps = (dispatch) => {
	// keys = props we will assign to comp
	// value = fn we use

	// return {
	// 	booksLoaded: (newBooks) => {
	// 		dispatch({ // this obj is an action
	// 			type: 'BOOKS_LOADED',
	// 			payload: newBooks
	// 		})
	// 	}
	// }

	// action Creator
	// return {
	// 	booksLoaded: (newBooks) => {
	// 		dispatch(booksLoaded(newBooks))
	// 	}
	// }

	// bindActionCreators
	// return bindActionCreators({ booksLoaded }, dispatch)

	// первый арг => obj with actionCreators we need in this comp
	// второй => dispatch
	//
	// bindActionCreators обернет наши actionCreators и сделает так что как только мы
	// вызываем fn booksLoaded она автоматически будет создавать нужное действие
	// и передавать его в метод dispatch
// }

export default compose(
	withBookService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
// 1. connect() оборачивает наш Comp и подключается к redux store,
// конфигурируем подключение через
// mapStateToProps => описывает какие данные Comp хочет получить из store
// и mapDispatchToProps => какие действия захочет выполнить наш Comp, какие action будет передавать в store
