import { addUserInput, STORE_USERINPUT } from '../actions/UserInputActions';
import reducer from '../reducers/userInput';

describe('actions', () => {
  it('should create an action to addUserInput ', () => {
    const input = 'See you later';
    const expectedAction = {
      type: STORE_USERINPUT,
      input
    };
    expect(addUserInput(input)).toEqual(expectedAction);
  });
});

describe('userinput reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ input: '' });
  });

  it('should handle STORE_USERINPUT', () => {
    const input = 'Keyboard cat';
    const action = {
      type: STORE_USERINPUT,
      input
    };

    expect(reducer({ input: '' }, action)).toEqual({ input: 'Keyboard cat' });
  });
});
