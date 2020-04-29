import React from "react";
import { Card } from "react-bootstrap";

const StrainFlavor = (props) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>{props.flavor}</Card.Header>
        <Card.Body>Body</Card.Body>
      </Card>
    </div>
  );
};

export default StrainFlavor;
