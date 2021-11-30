import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddDogForm = (props) => {
	const [show, setShow] = useState(false);
	const [inputVal, setInputVal] = useState({
		name: '',
		breed: '',
		age: '',
		picture: '',
		personality: '',
		walkLengths: '',
	});

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const handleInputChange = (e) => {
		setInputVal({ ...inputVal, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		fetch('https://pacific-wave-42416.herokuapp.com/dog', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(inputVal),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data.newDog._id);

				fetch(
					`https://pacific-wave-42416.herokuapp.com/owner/${props.userId}/addDog`,
					{
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ id: data.newDog._id }),
					}
				)
					.then((res) => res.json())
					.then((owner) => {
						console.log(owner.data);
						props.setOwnerInfo(owner.data);
						handleClose();
					})
					.catch((e) => console.log(e));
			})
			.catch((e) => console.log(e));
	};

	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				Add a Dog
			</Button>

			<Modal
				show={show}
				onHide={handleClose}
				backdrop='static'
				keyboard={false}>
				<Modal.Header closeButton>
					<Modal.Title>Add a dog</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form onSubmit={handleSubmit}>
						<Form.Group className='mb-3'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='text'
								name='name'
								value={inputVal.name}
								onChange={handleInputChange}
								placeholder='Enter name'
							/>
						</Form.Group>

						<Form.Group className='mb-3'>
							<Form.Label>Breed</Form.Label>
							<Form.Control
								type='text'
								name='breed'
								value={inputVal.breed}
								onChange={handleInputChange}
								placeholder='Enter breed'
							/>
						</Form.Group>

						<Form.Group className='mb-3'>
							<Form.Label>Age</Form.Label>
							<Form.Control
								type='number'
								name='age'
								value={inputVal.age}
								onChange={handleInputChange}
								placeholder='Enter age'
							/>
						</Form.Group>

						<Form.Group className='mb-3'>
							<Form.Label>Picture</Form.Label>
							<Form.Control
								type='text'
								name='picture'
								value={inputVal.picture}
								onChange={handleInputChange}
								placeholder='Enter image url'
							/>
						</Form.Group>

						<Form.Group className='mb-3'>
							<Form.Label>Personality</Form.Label>
							<Form.Control
								type='text'
								name='personality'
								value={inputVal.personality}
								onChange={handleInputChange}
								placeholder="What is your dog's temperment"
							/>
						</Form.Group>

						<Form.Group className='mb-3'>
							<Form.Label>Walk Lengths</Form.Label>
							<Form.Control
								type='text'
								name='walkLengths'
								value={inputVal.walkLengths}
								onChange={handleInputChange}
								placeholder='How long of a walk does your dog prefer'
							/>
						</Form.Group>

						<Button variant='primary' type='submit'>
							Submit
						</Button>
					</Form>
				</Modal.Body>
			</Modal>
		</>
	);
};

export default AddDogForm;
