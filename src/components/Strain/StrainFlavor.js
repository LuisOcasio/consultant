import React from "react";
import { Card } from "react-bootstrap";

const StrainFlavor = ({ flavor }) => {
  return (
    <Card
      style={{
        textAlign: "center",
        width: "150px",
        margin: "1rem",
      }}
    >
      {flavor}
    </Card>
  );
};

export default StrainFlavor;
