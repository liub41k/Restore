/** NAMING
|--------------------------------------------------
| [тип запроса]_[обьект]_[действие]
|--------------------------------------------------
*/

const booksRequested = () => {
	return {
		type: 'FETCH_BOOKS_REQUEST'
	}
}

const booksLoaded = (newBooks) => {
	return {
		type: 'FETCH_BOOKS_SUCCESS',
		payload: newBooks
	}
}

const booksError = (error) => {
	return {
		type: 'FETCH_BOOKS_FAILURE',
		payload: error
	}
}

const bookAddedToCard = (bookId) => {
	return {
		type: 'BOOK_ADDED_TO_CARD',
		payload: bookId
	}
}

const fetchBooks = (bookService, dispatch) => () => {
	dispatch(booksRequested());
	bookService.getBooks()
		.then((data) => dispatch(booksLoaded(data)))
		.catch((err) => dispatch(booksError(err)))
}


export {
	// booksLoaded,
	// booksRequested,
	// booksError,
	bookAddedToCard,
	fetchBooks
}