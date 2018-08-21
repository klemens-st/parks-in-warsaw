import React, { Component } from 'react';

import FilterMenu from './FilterMenu';
import Main from './Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterMenu />
        <Main />
      </div>
    );
  }
}

export default App;
