import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import StrainTable from './StrainTable';

const Strains = ({ key, flavors, effects }) => {
  const [strains, setStrains] = useState({});
  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_KEY}`)
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
  console.log('check me out', key);
  return (
    <>
      {vals.map(strain => (
        <StrainTable
          key={strains.id}
          flavors={strain.flavors}
          effects={strain.effects}
        />
      ))}
    </>
  );
};

export default Strains;
