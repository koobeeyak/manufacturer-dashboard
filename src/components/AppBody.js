import React, { Component } from 'react';

import ManufacturerFilterInput from './ManufacturerFilterInput.container';
import ManufacturerTable from './ManufacturerTable.container';

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
          <ManufacturerTable />
      </div>
    );
  }
}

export default AppBody;
