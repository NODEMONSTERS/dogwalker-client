import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Requests = (props) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const makeApiCall = async () => {
        const res = await fetch(`http://localhost:4000/walker/${props.walker._id}`)
        const json = res.json();
        console.log(json)
    };
    makeApiCall()
  }, []);

  const requestCards = requests.map((request) => {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Request!</Card.Title>
          <Card.Text>
            <p>Name:</p>
            <p>Email:</p>
            
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  });
  return (
    <Container>
      <h1>My requestss</h1>
      {requestCards}
    </Container>
  );
};

export default Requests;
