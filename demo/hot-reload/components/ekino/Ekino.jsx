/**
* Created by Pebie on 22/09/15.
*/

// import './styles/ekino.styl';

import React, { Component } from 'react';
import OpenSourceGrid from './OpenSourceGrid';
import Banner from './Banner';

class Ekino extends Component {

  render() {
    return (
      <div>
        <Banner />
        <OpenSourceGrid />
      </div>
    );
  }
}

export default Ekino;
