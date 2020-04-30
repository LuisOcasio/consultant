import React from "react";
import styled from "styled-components";
import Login from "../components/Login";
import banner from "../images/marijuana-fruit.jpg";

const Home = () => {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 2rem;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 2rem;
`;

export default Home;
