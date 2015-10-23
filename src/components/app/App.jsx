/**
* Created by Pebie on 22/09/15.
*/
import '../../fonts/fonts.scss';
import './app.scss'

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchComicsIfNeeded, invalidateComics } from '../../actions/actions.js';
import Header from '../layout/Header.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchComicsIfNeeded());
  }

  render() {
    return (
      <div className="main">
        <Header/>
      </div>
    );
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  const { getComics } = state;
  const {
    isFetching,
    items: items
  } = getComics || {
    isFetching: true,
    items: []
  };
  return {
    items,
    isFetching
  };
}

export default connect(mapStateToProps)(App);
