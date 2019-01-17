import React, { Component } from 'react';

import HeaderBanner from './HeaderBanner';
import ManufacturerFilterInput from './ManufacturerFilterInput.container';
import ManufacturerTable from './ManufacturerTable.container';

class AppBody extends Component {
  componentDidMount() {
    this.props.fetchAPIData();
  }

  render() {
    return (
      <div>
        <HeaderBanner />
        <ManufacturerFilterInput />
        <ManufacturerTable />
      </div>
    );
  }
}

export default AppBody;
