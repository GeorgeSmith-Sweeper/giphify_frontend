import { ADD_SEARCH_QUERY, addSearchQuery } from '../actions/searches';

describe('actions', () => {
  it('should create an action to addSearchQuery ', () => {
    const query = 'See you later';
    const expectedAction = {
      type: ADD_SEARCH_QUERY,
      query
    };
    expect(addSearchQuery(query)).toEqual(expectedAction);
  });
});
