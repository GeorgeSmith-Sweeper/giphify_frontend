export const FETCH_GREETING = 'FETCH_GREETING';

export const setGreeting = greeting => ({
  type: FETCH_GREETING,
  greeting
});

export const fetchGreeting = () => (dispatch) => {
  fetch('api/greetings')
    .then(res => res.json())
    .then((greeting) => {
      dispatch(setGreeting(greeting.data[0]));
    });
};
