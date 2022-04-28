import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup'

const Requests = (props) => {
	const [requests, setRequests] = useState([]);
    console.log(props.userId)
	useEffect(() => {
		const makeApiCall = async () => {
			const res = await fetch(
				`https://pacific-wave-42416.herokuapp.com/walker/${props.userId}`
			);
			const json = await res.json();
			setRequests(json.walker[0].requests)
		};
		makeApiCall();
	}, []);

	return (
		<Container>
			<h1>My requests</h1>
            <Row>
			{requests && requests.map((request) => {
		        const singleDog = request.dogs.map((dog) => {
			        return <li>{dog.name}</li>;
		        });
		        return (
                    <Col>
			            <Card style={{ width: '15rem' }}>
				            <Card.Body>
					            <Card.Title>Request!</Card.Title>
					            <Card.Text>
                                    <ListGroup>
						                <ListGroup.Item>Name: {request.ownerName}</ListGroup.Item>
						                <ListGroup.Item>Email: {request.ownerEmail}</ListGroup.Item>
                                        <ListGroup.Item>Dogs:
						                    <ul>
							                    {singleDog}
						                    </ul>
                                        </ListGroup.Item>
                                    </ListGroup>
					            </Card.Text>
					            <Button variant='primary'>Accept Request</Button>
				            </Card.Body>
			            </Card>
                    </Col>
		        );
	        })}
            </Row>
		</Container>
	);
};

export default Requests;
