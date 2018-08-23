import React, { Component } from 'react';

import FilterMenu from './FilterMenu';
import Main from './Main';
import Header from './Header';
import parks from './data';
import './App.css';

class App extends Component {
  state = {
    parks: parks,
    showDrawer: false
  }

  onParkClick = (parkId) => {
    // Start animation
    this.setState((state) => ({
      parks: state.parks.map((park) => {
        (park.id === parkId) &&
          (park.animate = true) &&
          (park.info = true);
        return park;
      })
    }), this.stopMarkerAnimation(parkId));
  }

  onToggleInfo = (parkId) => {
    this.setState((state) => ({
      parks: state.parks.map((park) => {
        (park.id === parkId) && (park.info = false);
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

  toggleDrawer = () => {
    this.setState((state) => ({showDrawer: !state.showDrawer}));
  }

  render() {
    return (
      <div className="App">
        <FilterMenu
          parks={this.state.parks}
          onParkClick={this.onParkClick}
          filterParks={this.filterParks}
          showDrawer={this.state.showDrawer}
          toggleDrawer={this.toggleDrawer}
        />
        <Header toggleDrawer={this.toggleDrawer}/>
        <Main
          parks={this.state.parks}
          onParkClick={this.onParkClick}
          onToggleInfo={this.onToggleInfo}
        />
      </div>
    );
  }
}

export default App;
