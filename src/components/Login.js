import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <input
          style={{
            textAlign: "center",
            marginTop: "2rem",
            width: "10rem",
            height: "1.7rem",
            fontSize: "1rem",
          }}
          name="username"
          ref={register({ required: true })}
          placeholder="username"
        />
        {errors.exampleRequired && <span>username required</span>}
        <input
          style={{
            textAlign: "center",
            marginTop: "2rem",
            width: "10rem",
            height: "1.7rem",
            fontSize: "1rem",
          }}
          name="exampleRequired"
          ref={register({ required: true })}
          placeholder="password"
        />
        {errors.exampleRequired && <span>password required</span>}
        <button
          style={{
            marginTop: "2rem",
            border: "none",
            backgroundColor: "#fff",
            color: "grey",
            width: "10rem",
            height: "1.7rem",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
        >
          submit
        </button>
      </Form>
    </>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eff3c6;
  width: 250px;
  height: 300px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  opacity: 0.9;
`;

export default Login;
