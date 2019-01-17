import React from 'react';
import Select from 'react-select';

const ManufacturerFilterInput = ({ setManufacturersFilter, manufacturersData }) => (
  <Select
    options={manufacturersData.map(m => ({ value: m.name, label: m.name }))}
    onChange={selectedOption => setManufacturersFilter(selectedOption.value)}
  />
);

export default ManufacturerFilterInput;
