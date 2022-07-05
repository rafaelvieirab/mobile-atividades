import { BookProps } from '../types/BookProps';
import { ActionTypes } from './action-types';

const initialState = { books: [] as Array<BookProps> };

interface StateType {
  books: Array<BookProps>;
}

interface ActionType {
  type: ActionTypes;
  payload: any;
}

function reducer(state = initialState, action: ActionType) {
  switch (action.type) {
    case ActionTypes.CREATE:
      const newBooks = [...state.books, action.payload];
      return { ...state, books: newBooks }

    case ActionTypes.EDIT:
      const editedBooks = state.books.filter(book => book.objectID != action.payload.objectID);
      editedBooks.push(action.payload);
      return { ...state, books: editedBooks };

    case ActionTypes.DELETE:
      const filteredBookState = state.books.filter(book => book.objectID != action.payload.objectID);
      return { ...state, books: filteredBookState }

    case ActionTypes.ADD_MANY:
      return { ...state, books: action.payload }

    default:
      return state;
  }
}

export { StateType, initialState, reducer };