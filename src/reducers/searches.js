import { ADD_SEARCH_QUERY } from '../actions/searches';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_SEARCH_QUERY:
      return {
        ...state,
        query: action.query
      };
    default:
      return state;
  }
};
