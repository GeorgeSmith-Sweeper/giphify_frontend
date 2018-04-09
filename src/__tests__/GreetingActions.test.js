import { setGreeting, FETCH_GREETING } from '../actions/GreetingActions';

describe('actions', () => {
  it('should create an action to set a greeting', () => {
    const greeting = 'Hello young fellow!';
    const expectedAction = {
      type: FETCH_GREETING,
      greeting
    };
    expect(setGreeting(greeting)).toEqual(expectedAction);
  });
});

// describe('greeting reducer', () => {
//   it('should return the initial state', () => {
//     expect(reducer(undefined, {})).toEqual({ greeting: '' });
//   });

//   it('should handle FETCH_GREETING', () => {
//     const greeting = { phrase: 'Hello!' };
//     const action = {
//       type: FETCH_GREETING,
//       greeting
//     };

//     expect(reducer({ greeting: '' }, action)).toEqual({ greeting: 'Hello!' });
//   });
// });
