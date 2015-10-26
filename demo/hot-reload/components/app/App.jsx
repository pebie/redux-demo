/**
* Created by Pebie on 22/09/15.
*/

// import '../../fonts/fonts.scss';

import React, { Component } from 'react';
import Ekino from '../ekino/Ekino';
import Header from '../layout/Header';
import Footer from '../layout/Footer';


class App extends Component {

  render() {
    return (
      <div className="main">
        <Header/>
        <Ekino/>
        <Footer/>
      </div>
    );
  }
}

export default App;
