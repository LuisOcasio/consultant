import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import StrainTable from './StrainTable';

const Strains = () => {
  const [strains, setStrains] = useState({});
  console.log('Right here!', strains);
  useEffect(() => {
    Axios.get(`https://strainapi.evanbusse.com/N10bxoY/strains/search/all`)
      .then(res => {
        console.log(res.data);
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
  console.log();
  return (
    <>
      {vals.map(strain => (
        <StrainTable flavors={strain.flavors} />
      ))}
    </>
  );
};

export default Strains;
