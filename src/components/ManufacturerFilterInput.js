import React from 'react';
import Select from 'react-select';

const ManufacturerFilterInput = ({ setManufacturersFilter, manufacturersData }) => (
  <div>
    <h2 className='manufacturer-filter__header'>View Budgets</h2>
    <Select
      className='manufacturer-filter__input'
      options={manufacturersData.map(m => ({ value: m.name, label: m.name }))}
      onChange={selectedOption => setManufacturersFilter(selectedOption.value)}
      placeholder='Filter for a Manufacturer'
    />
  </div>
);

export default ManufacturerFilterInput;
