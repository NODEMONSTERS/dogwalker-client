import { useState} from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

const Welcome = (props) => {
	const navigate = useNavigate();

	const ownerLoginApiCall = 'https://pacific-wave-42416.herokuapp.com/owner/login/';
	const walkerLoginApiCall = 'https://pacific-wave-42416.herokuapp.com/walker/login/';

	const [owner, setOwner] = useState({
		username: '',
		password: '',
	});

	const [walker, setWalker] = useState({
		username: '',
		password: '',
	});

	const [redirect, setRedirect] = useState(false);

	//update the user's information
	const handleChange = (event) => {
		if (event.target.className === 'owner form-control') {
			setOwner({ ...owner, [event.target.name]: event.target.value });
		} else if (event.target.className === 'walker form-control') {
			setWalker({ ...walker, [event.target.name]: event.target.value });
		}
	};

	// submit login
	const handleSubmit = (event) => {
		event.preventDefault();

		if (owner.password.length > 1) {
			fetch(ownerLoginApiCall, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(owner),
			})
				.then((res) => res.json())
				.then((data) => {
					props.setUserId(data.user._id);
					setRedirect(true);

					navigateOwner();
				})
				.catch((e) => console.log(e));
		} else if (walker) {
			fetch(walkerLoginApiCall, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(walker),
			})
				.then((res) => res.json())
				.then((data) => {
					console.log('data', data.user);

					props.setUserId(data.user._id);
					setRedirect(true);

					navigateOwner();
				})
				.catch((e) => console.log(e));
		}
	};

	const navigateOwner = () => {
		if (redirect) {
			if (owner.password.length > 1) {
				navigate('/owner');
			} else {
				navigate('/walker');
			}
		}
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
										className='owner'
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
										className='owner'
										value={owner.password}
										placeholder='Password'
										onChange={handleChange}
									/>
								</Form.Group>

								<Form.Group className='mb-3' controlId='formLogin'>
									<Button
										variant='primary'
										type='submit'
										onClick={handleSubmit}>
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
									<Form.Control
										type='email'
										name='username'
										className='walker'
										value={walker.username}
										placeholder='Enter email'
										onChange={handleChange}
									/>
								</Form.Group>

								<Form.Group className='mb-3' controlId='formBasicPassword'>
									<Form.Label>Password</Form.Label>
									<Form.Control
										type='password'
										name='password'
										className='walker'
										value={walker.password}
										placeholder='Password'
										onChange={handleChange}
									/>
								</Form.Group>
								<Form.Group className='mb-3' controlId='formLogin'>
									<Button
										variant='primary'
										type='submit'
										onClick={handleSubmit}>
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
