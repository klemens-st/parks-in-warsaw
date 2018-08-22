import React, { Component } from 'react';

import FilterMenu from './FilterMenu';
import Main from './Main';
import parks from './data';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterMenu parks={parks} />
        <Main parks={parks}/>
      </div>
    );
  }
}

export default App;
