import { useState , useContext} from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { userContext } from './userContext';
import { Navigate } from 'react-router-dom';


const Welcome = () => {

  const ownerLoginApiCall = 'http://localhost:4000/owner/login/';
  
  const [user, setUser] = useState({});

	const [owner, setOwner] = useState({
		username: '',
		password: '',
	});

	 console.log(user)
	//update the user's information
	const handleChange = (event) => {
		setOwner({ ...owner, [event.target.name]: event.target.value });
	};

	// submit login
	const handleSubmit = (event) => {
		event.preventDefault();
			
			fetch(ownerLoginApiCall, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(owner),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log(data);
					setUser(data);
					
					<Navigate to='/owner' />
				})
				.catch((e) => console.log(e));		
	
	};

	return (
		<Container>
			<h1>Welcome to DogWalker</h1>
			<h4>Please choose your portal to continue</h4>
			<p>I am a...</p>
			<Row>
				<Col>
					<Card style={{ width: '20rem' }}>
						<Card.Body>
							<Card.Title>Dog Owner</Card.Title>
							<Form>
								<Form.Group className='mb-3' controlId='formBasicEmail'>
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type='email'
										name='username'
										value={owner.username}
										placeholder='Enter email'
                    onChange={handleChange}
									/>
								</Form.Group>

								<Form.Group className='mb-3' controlId='formBasicPassword'>
									<Form.Label>Password</Form.Label>
									<Form.Control
										type='password'
										name='password'
										value={owner.password}
										placeholder='Password'
                    onChange={handleChange}
									/>
								</Form.Group>

								<Form.Group className='mb-3' controlId='formLogin'>
									<Button variant='primary' type='submit' onClick={handleSubmit}>
										Log In
									</Button>
								</Form.Group>
								<Form.Group className='mb-3' controlId='formRegister'>
									<Form.Text className='text-muted'>
										No account? <Link to='/register/'>Register</Link> here
									</Form.Text>
								</Form.Group>
							</Form>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card style={{ width: '20rem' }}>
						<Card.Body>
							<Card.Title>Dog Walker</Card.Title>
							<Form>
								<Form.Group className='mb-3' controlId='formBasicEmail'>
									<Form.Label>Email address</Form.Label>
									<Form.Control type='email' placeholder='Enter email' />
								</Form.Group>

								<Form.Group className='mb-3' controlId='formBasicPassword'>
									<Form.Label>Password</Form.Label>
									<Form.Control type='password' placeholder='Password' />
								</Form.Group>
								<Form.Group className='mb-3' controlId='formLogin'>
									<Button variant='primary' type='submit'>
										Log In
									</Button>
								</Form.Group>
								<Form.Group className='mb-3' controlId='formRegister'>
									<Form.Text className='text-muted'>
										No account? <Link to='/register/'>Register</Link> here
									</Form.Text>
								</Form.Group>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Welcome;
