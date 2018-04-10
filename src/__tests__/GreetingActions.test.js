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

