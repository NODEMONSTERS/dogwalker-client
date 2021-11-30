import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
	const navigate = useNavigate();

	const ownerApiCall = 'http://localhost:4000/owner/register/';
	const walkerApiCall = 'http://localhost:4000/walker/register/';

	// set information for the new uesr
	const [user, setUser] = useState({
		name: '',
		city: '',
		username: '',
		password: '',
	});

	//set user type for api call
	const [userType, setUserType] = useState('');

	//update the user's information
	const handleChange = (event) => {
		setUser({ ...user, [event.target.name]: event.target.value });
	};

	// select dog owner or dog walker
	const onSelected = (event) => {
		setUserType(event.target.value);
	};

	// submit registration
	const handleSubmit = (event) => {
		event.preventDefault();

		// if they are an owner
		if (userType === 'owner') {
			fetch(ownerApiCall, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log('new owner created');
				})
				.catch((e) => console.log(e));
			navigate('/');
		}
		// if they are a walker
		else if (userType === 'walker') {
			fetch(walkerApiCall, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(user),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log('new walker created');
				})
				.catch((e) => console.log(e));
			navigate('/');
		}
	};

	return (
		<div>
			<h1> Registration</h1>
			<Form onSubmit={handleSubmit}>
				<Form.Group className='mb-3' controlId='formName'>
					I am a....
					<Form.Check
						inline
						label='Dog Owner'
						name='user-type'
						type='radio'
						id={'owner-radio'}
						value='owner'
						onChange={onSelected}
					/>
					<Form.Check
						inline
						label='Dog Walker'
						name='user-type'
						type='radio'
						id={'walker-radio'}
						value='walker'
						onChange={onSelected}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formName'>
					<Form.Label> Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter name'
						name='name'
						value={user.name}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formCity'>
					<Form.Label>City</Form.Label>
					<Form.Control
						type='text'
						placeholder='Enter your city'
						name='city'
						value={user.city}
						onChange={handleChange}
					/>
				</Form.Group>
				<Form.Group className='mb-3' controlId='formEmail'>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='Enter email'
						name='email'
						value={user.email}
						onChange={handleChange}
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className='mb-3' controlId='formBasicPassword'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='password'
						placeholder='Password'
						name='password'
						value={user.password}
						onChange={handleChange}
					/>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Register;
