const initialState = {
	books : [],
	loading: true,
	error: null,
	bucketItems: [],
	orderTotal: 200
}

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'FETCH_BOOKS_REQUEST':
			return {
				...state,
				books: [],
				loading: true,
				error: null,
			};
			case 'FETCH_BOOKS_SUCCESS':
			return {
				...state,
				books: action.payload,
				loading: false,
				error: null,
			};
		case 'FETCH_BOOKS_FAILURE':
			return {
				...state,
				books: [],
				loading: false,
				error: action.payload,
			}
		case 'BOOK_ADDED_TO_CARD':
			const bookId = action.payload
			const book = state.books.find((book) => book.id === bookId)
			const newItem = {
				id: book.id,
				name: book.title,
				count: 1,
				total: book.price
			}
			return {
				...state,
				bucketItems: [
					...state.bucketItems,
					newItem
				]
			}
		default:
			return state
	}
}

export default reducer