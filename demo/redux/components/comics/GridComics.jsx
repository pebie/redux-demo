/**
* Created by Pebie on 22/09/15.
*/

import './styles/ekino.styl';

import React, { Component, PropTypes } from 'react';
import GridItem from './GridItem';

class GridComics extends Component {

  render() {

    let items = this.props.items.map((item, key) => {
      return <GridItem item={item} key={key}/>

    });
    return (

      <div className="repos-grid">
        {items}
      </div>
    );
  }
}

GridComics.propTypes = {
  items: PropTypes.array.isRequired
};

export default GridComics;
