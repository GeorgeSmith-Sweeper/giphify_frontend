import { STORE_USERINPUT } from '../actions/UserInputActions';

const initialState = {
  input: ''
};

const userInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_USERINPUT:
      return { ...state, input: action.input };
    default:
      return state;
  }
};

export default userInputReducer;
