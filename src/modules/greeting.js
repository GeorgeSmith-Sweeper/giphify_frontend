export const FETCH_GREETING = 'counter/FETCH_GREETING';

const initialState = {
  greeting: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return {
        ...state,
        greeting: 'HELLO WORLD'
      };
    default:
      return state;
  }
};

export const fetchGreeting = (greeting) => {
  return dispatch => {
    dispatch({
      type: FETCH_GREETING,
      greeting    
    });
  };
};
// export const fetchGreetings = () => (dispatch) => {
//   fetch(`/api/greetings`)
//     .then((greetings) => {
//       dispatch()
//     })
// }
export default reducer;
