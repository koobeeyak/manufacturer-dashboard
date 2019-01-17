import { connect } from 'react-redux';

import { setManufacturersFilter } from '../actions';
import { getManufacturersDataSelector } from '../reducers/manufacturers';
import ManufacturerFilterInputComponent from './ManufacturerFilterInput';

const mapStateToProps = ({ manufacturers }) => ({
  manufacturersData: getManufacturersDataSelector(manufacturers),
});

const mapDispatchToProps = dispatch => ({
  setManufacturersFilter: filter => dispatch(setManufacturersFilter(filter)),
});

const ManufacturerFilterInput = connect(
  mapStateToProps, mapDispatchToProps,
)(ManufacturerFilterInputComponent);

export default ManufacturerFilterInput;
