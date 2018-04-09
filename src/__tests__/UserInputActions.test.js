import { addUserInput, STORE_USERINPUT } from '../actions/UserInputActions';

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
