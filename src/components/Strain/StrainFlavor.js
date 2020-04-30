import React from "react";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const StrainFlavor = ({ flavor }) => {
  return (
    <Wrapper>
      <Card
        style={{
          width: "10rem",
          textAlign: "center",
          margin: "2rem",
        }}
      >
        <Card.Header>{flavor}</Card.Header>
        <Card.Body>Body</Card.Body>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 25%;
`;

export default StrainFlavor;
