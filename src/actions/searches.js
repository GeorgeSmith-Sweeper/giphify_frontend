export const ADD_SEARCH_QUERY = 'ADD_SEARCH_QUERY';

export const addSearchQuery = query => ({
  type: ADD_SEARCH_QUERY,
  query
});

export const handleAddSearchQuery = (query) => {
  return dispatch =>
    fetch('/api/searches', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch(addSearchQuery(query));
        }
      })
      .catch(error => console.log(error));
};
