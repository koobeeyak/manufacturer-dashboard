import React, { Component } from 'react';

class AppBody extends Component {
  componentDidMount() {
    this.props.fetchAPIData();
  }
  render() {
    return (
      <div>
          Hello, AppBody
      </div>
    );
  }
}

export default AppBody;
