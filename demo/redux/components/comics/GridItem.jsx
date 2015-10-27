/**
* Created by Pebie on 22/09/15.
*/

import React, { Component, PropTypes } from 'react';

class GridItem extends Component {
  render() {
    let{item} = this.props;
    return (
      <div className="repos-grid__item">
        <a className="repos-grid__item__repo">
          <h3 className="repos-grid__item__title">{item.name}</h3>
          <span>#{item.pageCount}pages</span>
          <p>{item.description}</p>
          <img src={item.thumbnail} width="100px" height="120px"/>
          <p className="page-count">
            <span>©‎ {item.serie} 2015</span>
          </p>
        </a>
      </div>
    );
  }
}

GridItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default GridItem;
