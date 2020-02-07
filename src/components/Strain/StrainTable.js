import React from 'react';
import { Table } from 'react-bootstrap';

const StrainTable = ({ flavor }) => {
  return (
    <div className='strain-table'>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
            <th>Table heading</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
            <td>{flavor}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default StrainTable;
