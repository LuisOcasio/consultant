import React from 'react';
import { Table } from 'react-bootstrap';

const StrainTable = ({ flavors }) => {
  return (
    <div className='strain-table'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>{flavors}</th>
          </tr>
        </thead>
      </Table>
    </div>
  );
};

export default StrainTable;
