import { ADD_SEARCH_QUERY, addSearchQuery } from '../actions/searches';
import reducer from '../reducers/searches';

describe('actions', () => {
  it('should create an action to addSearchQuery ', () => {
    const query = 'See you later';
    const expectedAction = {
      type: ADD_SEARCH_QUERY,
      query
    };
    expect(addSearchQuery(query)).toEqual(expectedAction);
  });

  describe('searches reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({});
    });

    it('should handle ADD_SEARCH_QUERY', () => {
      const query = 'Keyboard cat';
      const action = {
        type: ADD_SEARCH_QUERY,
        query
      };

      expect(reducer({ query: '' }, action)).toEqual({ query: 'Keyboard cat' });
    });
  });
});
