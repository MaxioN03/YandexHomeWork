import React from 'react';
import './Spinner.css';

class Spinner extends React.Component {
  render() {
    return (
      <div className="screen">
        <div className="lds-ring"><div /><div /><div /><div /></div>
      </div>
    );
  }
}

module.exports = Spinner;
