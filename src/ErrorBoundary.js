import React, { Component } from 'react';
import { node } from 'prop-types';

// Copied shamelessly from https://reactjs.org/docs/error-boundaries.html
// Adjusted the example a bit.
// This component is for handling Google Map API failed load.
class ErrorBoundary extends Component {
  static propTypes = {
    children: node.isRequired
  }

  state = { hasError: false };

  componentDidCatch() {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="alert" role="alert">
          <p>Failed to load Google Map.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;