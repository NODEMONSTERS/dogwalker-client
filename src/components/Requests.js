import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Requests = (props) => {
	const [requests, setRequests] = useState([]);
	const [refresh, setRefresh] = useState(0);
	let counter = 0;

	useEffect(() => {
		const makeApiCall = async () => {
			const res = await fetch(
				`https://pacific-wave-42416.herokuapp.com/walker/${props.walker._id}`
			);
			const json = res.json();
			setRequests(json.requests);
		};
		makeApiCall();
	}, [refresh]);

	const handleClick = () => {
		counter += 1;
		setRefresh(counter);
	};

	const requestCards = requests.map((request) => {
		const singleDog = request.dogs.map((dog) => {
			return <li>{dog.name}</li>;
		});
		return (
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src='holder.js/100px180' />
				<Card.Body>
					<Card.Title>Request!</Card.Title>
					<Card.Text>
						<p>Name:{request.ownerName}</p>
						<p>Email:{request.ownerEmail}</p>
						<ul>
							<p>Dogs:</p>
							{singleDog}
						</ul>
					</Card.Text>
					<Button variant='primary'>Go somewhere</Button>
				</Card.Body>
			</Card>
		);
	});
	return (
		<Container>
			<h1>My requestss</h1>
			<Button onClick={handleClick}>Refresh</Button>
			{requestCards}
		</Container>
	);
};

export default Requests;
