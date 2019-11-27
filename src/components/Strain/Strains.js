import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import StrainTable from './StrainTable';

const Strains = ({ id, race, flavors }) => {
  const [strains, setStrains] = useState();
  console.log(strains);
  useEffect(() => {
    Axios.get(`https://strainapi.evanbusse.com/N10bxoY/strains/search/all`)
      .then(res => {
        console.log(res.data);
        setStrains({ data: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  if (!strains) {
    return <div>Getting your strains...</div>;
  }

  return (
    <div>
      {strains.map(strain => (
        <StrainTable
          key={strain.id}
          race={strain.race}
          flavors={strain.flavors}
        />
      ))}
    </div>
  );
};

export default Strains;
