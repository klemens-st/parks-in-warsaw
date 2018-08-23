import React from 'react';
import { func } from 'prop-types';

import './Header.css';

Header.propTypes = {
  toggleDrawer: func.isRequired
};

function Header({toggleDrawer}) {
  return (
    <header>
      <button
        type="button"
        onClick={toggleDrawer}
      >
        Toggle drawer
      </button>
      <h1>Parks in Warsaw</h1>
    </header>
  );
}

export default Header;