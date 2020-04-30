import React from "react";
import Strains from "../components/Strain/Strains";
import styled from "styled-components";

const Flavors = () => {
  return (
    <Wrapper>
      <Strains />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default Flavors;
