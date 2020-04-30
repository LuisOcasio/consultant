import React from "react";
import { Modal, Button, InputGroup } from "react-bootstrap";

import styled from "styled-components";
import Login from "../components/Login";
import banner from "../images/marijuana-fruit.jpg";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="med"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">warning</Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4>please verify</h4>
        <p>Are you 21 years or older?</p>

        <InputGroup.Prepend
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "50%",
          }}
        >
          <div>
            <InputGroup.Radio aria-label="Radio for following text input" />
            <p>Yes</p>
          </div>

          <div>
            <InputGroup.Radio aria-label="Radio for following text input" />
            <p>no</p>
          </div>
        </InputGroup.Prepend>
      </Modal.Body>

      <Modal.Footer>
        <Button>submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Home = () => {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <>
      <Wrapper>
        <Login />
      </Wrapper>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
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
