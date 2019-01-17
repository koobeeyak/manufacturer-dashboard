import { connect } from 'react-redux';

import { getFilteredManufacturerSelector } from '../reducers/manufacturers';
import ManufacturerTableComponent from './ManufacturerTable';

const mapStateToProps = ({ manufacturers }) => ({
  filteredManufacturer: getFilteredManufacturerSelector(manufacturers),
});

const ManufacturerTable = connect(mapStateToProps)(ManufacturerTableComponent);

export default ManufacturerTable;
