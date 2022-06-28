// import { ADD_ARTICLE, UPDATE_ARTICLE, SELECT_ARTICLE, DELETE_ARTICLE, OPEN_FORM, CLOSE_FORM, OPEN_EDIT_FORM, CLOSE_EDIT_FORM } from "../constants/action-types";

// const initialState = {
//   //Read
//   articles: [
//     {
//       title: "React Redux Tutorial for Beginners",
//       id: 0,
//       date: "July 20, 2014"
//     },
//     {
//       title: "Redux e React: cos'è Redux e come usarlo con React",
//       id: 1,
//       date: "Jan 7, 2014"
//     }
//   ],
//   uiState: {
//     //Create
//     openFormDialog: false,
//     //Update
//     openEditDialog: false,
//     articleToEdit: {},
//     //Delete
//     checked: []
//   }
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_ARTICLE:
//       return {
//         ...state,
//         articles: [...state.articles, action.payload]
//       };

//     case OPEN_FORM:
//       return {
//         ...state,
//         uiState: {
//           ...state.uiState,
//           openFormDialog: true
//         }
//       };

//     case CLOSE_FORM:
//       return {
//         ...state,
//         uiState: {
//           ...state.uiState,
//           openFormDialog: false
//         }
//       };

//     case UPDATE_ARTICLE:
//       return {
//         ...state,
//         articles: state.articles.map(article => {
//           if (article.id !== action.payload.id) {
//             return article;
//           } else {
//             return { ...article, title: action.payload.title };
//           }
//         })
//       };

//     case OPEN_EDIT_FORM:
//       return {
//         ...state,
//         uiState: {
//           ...state.uiState,
//           openEditDialog: true,
//           articleToEdit: action.payload
//         }
//       };

//     case CLOSE_EDIT_FORM:
//       return {
//         ...state,
//         uiState: {
//           ...state.uiState,
//           openEditDialog: false
//         }
//       };

//     case SELECT_ARTICLE:
//       const currentIndex = state.uiState.checked.indexOf(action.payload);
//       if (currentIndex === -1) {
//         state.uiState.checked.push(action.payload);
//       } else {
//         state.uiState.checked.splice(currentIndex, 1);
//       }
//       return state;

//     case DELETE_ARTICLE:
//       for (var check in state.uiState.checked) {
//         //remove article
//         var article = state.articles[check];
//         state.articles.splice(check, 1);

//         //Remove Index
//         var index = state.uiState.checked.indexOf(check);
//         if (index > -1) {
//           state.uiState.checked.splice(index, 1);
//         }
//       }
//       state.uiState.checked = [];
//       return state;

//     default:
//       return state;
//   }
// };
// export default rootReducer;

export default () => { console.log('') };
