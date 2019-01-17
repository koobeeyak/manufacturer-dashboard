import React from 'react';

import ManufacturerTableHeader from './ManufacturerTableHeader';

const ManufacturerTable = ({ filteredManufacturer }) => (
  <table>
    <ManufacturerTableHeader />
    {filteredManufacturer.map(m => (
      <tbody key={m.id}>
        <tr>
          <td>{m.id}</td>
          <td>{m.name}</td>
          <td>{m.short_name}</td>
        </tr>
      </tbody>
    ))}
    </table>
);

export default ManufacturerTable;
