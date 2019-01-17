import { connect } from 'react-redux';

import { getManufacturersRequest, getBrandsRequest } from '../actions';
import AppBodyComponent from './AppBody';

const mapDispatchToProps = dispatch => ({
  fetchAPIData: () => {
    dispatch(getManufacturersRequest());
    dispatch(getBrandsRequest());
  },
});

const AppBody = connect(null, mapDispatchToProps)(AppBodyComponent);

export default AppBody;
