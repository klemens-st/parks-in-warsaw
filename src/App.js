import React, { Component } from 'react';

import FilterMenu from './FilterMenu';
import Main from './Main';
import parks from './data';
import './App.css';

class App extends Component {
  state = {
    parks: parks,
  }

  onParkClick = (parkId) => {
    // Start animation
    this.setState((state) => ({
      parks: state.parks.map((park) => {
        (park.id === parkId) && (park.animate = true);
        return park;
      })
    }), this.stopMarkerAnimation(parkId));
  }

  stopMarkerAnimation = (parkId) => {
    setTimeout(() => {
      this.setState((state) => ({
        parks: state.parks.map((park) => {
          (park.id === parkId) && (park.animate = false);
          return park;
        })
      }));
    });
  }

  filterParks = (query) => {
    const re = new RegExp(query, 'i');

    this.setState({
      parks: parks.filter((park) => (
        re.test(park.title)
      ))
    });
  }

  render() {
    return (
      <div className="App">
        <FilterMenu
          parks={this.state.parks}
          onParkClick={this.onParkClick}
          filterParks={this.filterParks}
        />
        <Main
          parks={this.state.parks}
          onParkClick={this.onParkClick}
        />
      </div>
    );
  }
}

export default App;
