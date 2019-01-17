import React, { Component } from 'react';

import ManufacturerFilterInput from './ManufacturerFilterInput.container';

class AppBody extends Component {
  componentDidMount() {
    this.props.fetchAPIData();
  }
  render() {
    return (
      <div>
          <div>
          Hello, AppBody
          </div>
          <ManufacturerFilterInput />
      </div>
    );
  }
}

export default AppBody;
