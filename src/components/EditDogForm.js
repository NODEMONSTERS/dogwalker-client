import React, {useState} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const EditDogForm = (props) => {
  const [show, setShow] = useState(false);
  const [inputVal, setInputVal] = useState(props.dog)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (e) => {
    setInputVal({ ...inputVal, [e.target.name]: e.target.value});
  }

  const handleDelete = () => {
    fetch(`https://pacific-wave-42416.herokuapp.com/${inputVal._id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id: props.ownerInfo._id }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('response data:', data.owner);

				props.setOwnerInfo(data.owner);
				handleClose();
			});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://pacific-wave-42416.herokuapp.com/${inputVal._id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ dog: inputVal, ownerId: props.ownerInfo._id }),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data.owner);
				props.setOwnerInfo(data.owner);
				handleClose();
			})
			.catch((e) => console.log(e));

  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Edit</Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit {props.dog.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name='name' value={inputVal.name} onChange={handleInputChange} placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Breed</Form.Label>
              <Form.Control type="text" name='breed' value={inputVal.breed} onChange={handleInputChange} placeholder="Enter breed" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" name='age' value={inputVal.age} onChange={handleInputChange} placeholder="Enter age" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Picture</Form.Label>
              <Form.Control type="text" name='picture' value={inputVal.picture} onChange={handleInputChange} placeholder="Enter image url" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Personality</Form.Label>
              <Form.Control type="text" name='personality' value={inputVal.personality} onChange={handleInputChange} placeholder="What is your dog's temperment" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Walk Lengths</Form.Label>
              <Form.Control type="text" name='walkLengths' value={inputVal.walkLengths} onChange={handleInputChange} placeholder="How long of a walk does your dog prefer" />
            </Form.Group>
          
            <Button variant="primary" type="submit">Submit</Button>
          
            <Button variant="danger" type="button" onClick={handleDelete}>Delete</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditDogForm;