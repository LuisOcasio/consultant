import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import StrainTable from './StrainTable';

const Strains = () => {
  const [strains, setStrains] = useState({});

  const API = process.env.REACT_APP_KEY;

  useEffect(() => {
    Axios.get(API)
      .then(res => {
        // console.log(res.data);
        setStrains(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  if (!strains) {
    return <div>Getting your strains...</div>;
  }

  const vals = Object.keys(strains).map(key => strains[key]);
  console.log('check me out', strains);

  return (
    <>
      {vals.map(strain => (
        <StrainTable />
      ))}
    </>
  );
};

export default Strains;
