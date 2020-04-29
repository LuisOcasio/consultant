import React from "react";
import { Card } from "react-bootstrap";

const StrainFlavor = ({ flavor }) => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{flavor}</Card.Header>
      </Card>
    </>
  );
};

export default StrainFlavor;
