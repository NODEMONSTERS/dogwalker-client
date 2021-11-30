import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const WalkerHome = (props) => {
	const [dogs, setDogs] = useState();

	useEffect(() => {
		const makeApiCall = async () => {
			const res = await fetch('https://pacific-wave-42416.herokuapp.com/dog');
			const json = await res.json();
			setDogs(json.data);
		};
		makeApiCall();
	}, []);
	return (
		<Container>
            <h2>Welcome Back</h2>
			<Button variant="light">
				<Link to='/walker/requests'>My requests</Link>
			</Button>
			<Row>
				{dogs &&
					dogs.map((dog) => {
						return (
							<Col>
								<Card style={{ width: '10rem' }}>
									<Card.Img variant='top' src={dog.picture} />
									<Card.Body>
										<Card.Title>Name: {dog.name}</Card.Title>
										<Card.Text></Card.Text>
									</Card.Body>
								</Card>
							</Col>
						);
					})}
			</Row>
		</Container>
	);
};

export default WalkerHome;
