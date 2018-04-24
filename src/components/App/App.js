import React from 'react';
import { connect } from 'react-redux';
import Infinite from '../Infinite/Infinite';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Infinite />
      </div>
    );
  }
}

export default connect()(App);
