export const FETCH_GREETING = 'FETCH_GREETING';

const initialState = {
  greeting: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return { ...state, greeting: action.greeting.phrase };
    default:
      return state;
  }
};

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

export const setGreeting = greeting => ({
  type: FETCH_GREETING,
  greeting
});

export const fetchGreeting = () => (dispatch) => {
  fetch('api/greetings')
    .then(handleErrors)
    .then(res => res.json())
    .then((greeting) => {
      dispatch(setGreeting(greeting.data[0]));
    });
};