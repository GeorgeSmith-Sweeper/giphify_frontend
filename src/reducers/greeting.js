import { FETCH_GREETING } from '../actions/greeting';

const initialState = {
  greeting: ''
};

const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return { ...state, greeting: action.greeting.phrase };
    default:
      return state;
  }
};

export default greetingReducer;
