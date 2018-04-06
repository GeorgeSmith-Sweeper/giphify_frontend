import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  setGreeting,
  FETCH_GREETING,
  fetchGreeting,
  reducer
} from './greeting';


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

describe('greeting reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      greeting: ''
    });
  });
});
