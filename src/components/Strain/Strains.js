import React, { useState, useEffect } from "react";
import axios from "axios";
import StrainFlavor from "./StrainFlavor";

const Strains = () => {
  const [strains, setStrains] = useState([]);

  useEffect(() => {
    const Data = `http://strainapi.evanbusse.com/${process.env.REACT_APP_KEY}/searchdata/flavors`;

    axios
      .get(Data)
      .then((res) => {
        console.log("show me data!", res.data);
        setStrains(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!strains) {
    return <div>Getting your strains...</div>;
  }

  return (
    <>
      {strains.map((e) => {
        return <StrainFlavor key={e} flavor={e} />;
      })}
    </>
  );
};

export default Strains;
