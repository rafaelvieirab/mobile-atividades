import { BookProps } from '../types/BookProps';
import { ActionTypes } from './action-types';

const initialState = { books: [] as Array<BookProps> };

interface StateType {
  books: Array<BookProps>;
}

// interface PayloadType {
//   data: BookProps;
// }

interface ActionType {
  type: ActionTypes;
  payload: any;
  // payload: PayloadType;
}

function reducer(state = initialState, action: ActionType) {
  switch (action.type) {
    // case ActionTypes.CREATE:
    //   return [...state, action.payload.data];
    // case ActionTypes.EDIT:
    //   constfiltered = state.filter(book => book.objectID != action.payload.objectID);
    //   // constfiltered = state.filter(book => book.objectID != action.payload.data.objectID);
    //   // return [filtered, action.payload.data];
    //   return [filtered, action.payload];
    case ActionTypes.DELETE:
      // constfiltered = state.filter(book => book.objectID != action.payload.data.objectID);
      const filteredBookState = state.books.filter(book => book.objectID != action.payload.objectID);
      return { ...state, books: filteredBookState }
    case ActionTypes.ADD_MANY:
      return { ...state, books: action.payload }
    default:
      return state;
  }
}

// const store = configureStore({
//   reducer: reducer,
// });

export { StateType, initialState, reducer };