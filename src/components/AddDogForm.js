import React, {useState} from 'react';

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddDogForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log('you are adding a dog')
    setShow(true)
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add a Dog
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a dog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        </Modal.Body>


        {/* <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default AddDogForm;