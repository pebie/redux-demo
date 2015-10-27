export const REQUEST_COMICS = 'REQUEST_COMICS';
export const RECEIVE_COMICS = 'RECEIVE_COMICS';
export const INVALIDATE_COMICS = 'INVALIDATE_COMICS';
export const ADD_COMIC = 'ADD_COMICS';

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

function addComic(json) {
  return {
    type: ADD_COMIC,
    item: json
  };
}

function postComic(json){

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

export function postComic(json) {
  return (dispatch, getState) => {
    return fetch('/api/comics', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(json)
    })
    .then(req => {
      dispatch(addComic(req))
      dispatch(fetchComics());
    });
  };
}
