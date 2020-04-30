import React from "react";
import "./index.scss";
import { Modal, Button } from "react-bootstrap";

import { Navigation } from "./components/index";
import { Home } from "./components/index";
import { Route } from "react-router-dom";
import Flavors from "./Pages/Flavors";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="med"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Entering</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>please verify</h4>
        <p>Are you 21 years old or older?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const App = () => {
  const [modalShow, setModalShow] = React.useState(true);

  return (
    <div id="wrapper">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/flavors" component={Flavors} />
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default App;
