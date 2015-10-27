/**
* Created by Pebie on 22/09/15.
*/
import '../../fonts/fonts.scss';
import './app.scss'
import "bootstrap-webpack";

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {fetchComicsIfNeeded, postComic, invalidateComics } from '../../actions/actions.js';
import Header from '../layout/Header.jsx';
import GridComics from '../comics/GridComics.jsx';
import Forms from '../forms/Forms.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchComicsIfNeeded());
  }

  onAddComic(json) {
    const { dispatch } = this.props;
    dispatch(postComic(json));
  }

  render() {
    return (
      <div className="main">
        <Header/>
        <Forms onAddComic={this.onAddComic.bind(this)}/>
        <GridComics items={this.props.items} />
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
