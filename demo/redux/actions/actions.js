export const REQUEST_COMICS = 'REQUEST_COMICS';
export const RECEIVE_COMICS = 'RECEIVE_COMICS';
export const INVALIDATE_COMICS = 'INVALIDATE_COMICS';

export function invalidateComics() {
  return {
    type: INVALIDATE_COMICS
  };
}

function requestComics() {
  return {
    type: REQUEST_COMICS
  };
}

function receiveComics(json) {
  return {
    type: RECEIVE_COMICS,
    items: json
  };
}

function fetchComics() {
  return dispatch => {
    dispatch(requestComics());
    return fetch('/api/comics')
      .then(req => {
        return req.json()
      })
      .then(json => {
        dispatch(receiveComics(json))
      });
  };
}

function shouldFetchComics(state) {
  const items = state.getComics.items.length > 0;
  if (!items) {
    return true;
  } else if (state.getComics.isFetching) {
    return false;
  } else {
    return state.getComics.didInvalidate;
  }
}

export function fetchComicsIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchComics(getState())) {
      return dispatch(fetchComics());
    }
  };
}
