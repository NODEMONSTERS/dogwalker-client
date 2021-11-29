import { useState } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";


const Welcome = () => {
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
									<Form.Control type='email' placeholder='Enter email' />
									<Form.Text className='text-muted'>
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>

								<Form.Group className='mb-3' controlId='formBasicPassword'>
									<Form.Label>Password</Form.Label>
									<Form.Control type='password' placeholder='Password' />
								</Form.Group>
								<Link to='/register/'>
									<Button variant='primary' type='submit'>
										Register
									</Button>
								</Link>
								<Button variant='primary' type='submit'>
									Log In
								</Button>
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
									<Form.Text className='text-muted'>
										We'll never share your email with anyone else.
									</Form.Text>
								</Form.Group>

								<Form.Group className='mb-3' controlId='formBasicPassword'>
									<Form.Label>Password</Form.Label>
									<Form.Control type='password' placeholder='Password' />
								</Form.Group>
								<Link to='/register/'>
									<Button variant='primary' type='submit'>
										Register
									</Button>
								</Link>
								<Button variant='primary' type='submit'>
									Log In
								</Button>
							</Form>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Welcome;
