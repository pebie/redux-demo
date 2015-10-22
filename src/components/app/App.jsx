/**
* Created by Pebie on 22/09/15.
*/
import '../../fonts/fonts.scss';
import './app.scss'

import React, { Component } from 'react';
import Header from '../layout/Header.jsx';


export default class App extends Component {

  render() {
    return (
      <div className="main">
        <Header/>
      </div>
    );
  }
}
