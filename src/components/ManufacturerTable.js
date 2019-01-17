import React from 'react';

const ManufacturerTable = ({ filteredManufacturer }) => (
  <table>
    <tbody>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Short-Name</th>
      </tr>
    </tbody>
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
