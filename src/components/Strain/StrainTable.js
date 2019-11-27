import React from 'react';
import { Table } from 'react-bootstrap';

const StrainTable = ({ key, id, flavors }) => {
  return (
    <div className='strain-table'>
      <Table responsive variant='dark'>
        <thead>
          <tr>
            <th>id</th>
            <th>race</th>
            <th>flavors</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{id}</td>
            <td>{flavors}</td>
            <td>{key}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default StrainTable;
