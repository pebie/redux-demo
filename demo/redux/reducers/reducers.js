import { combineReducers } from 'redux';
import {
  INVALIDATE_COMICS,
  REQUEST_COMICS,
  RECEIVE_COMICS
} from '../actions/actions.js';

function getComics(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_COMICS:
    return Object.assign({}, state, {
      didInvalidate: true
    });
    case REQUEST_COMICS:
    return Object.assign({}, state, {
      isFetching: true,
      didInvalidate: false
    });
    case RECEIVE_COMICS:
    return Object.assign({}, state, {
      isFetching: false,
      didInvalidate: false,
      items: action.items
    });
    default:
    return state;
  }
}

const rootReducer = combineReducers({
  getComics
});

export default rootReducer;
