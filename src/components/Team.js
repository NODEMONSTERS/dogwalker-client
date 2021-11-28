import React, { Component } from "react";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Team = () => {
  return (
    
    <Container>
      <h1>Meet the Team</h1>
      
      <Row>
        <Col>
          <Card style={{ width: "30rem" }}>
            {/* <Card.Img variant="left" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>Alyshia Bentley</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Seattle, WA
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Alyshia's Portfolio</Card.Link>
              <Card.Link href="https://github.com/lyshia">Alyshia's Github</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "30rem" }}>
            {/* <Card.Img variant="left" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>Daniel An</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Tacoma, WA
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Daniel's Portfolio</Card.Link>
              <Card.Link href="https://github.com/dma151">Daniel's Github</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card style={{ width: "30rem" }}>
            {/* <Card.Img variant="left" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>Jay Nguyen</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Los Angeles, CA
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Jay's Portfolio</Card.Link>
              <Card.Link href="https://github.com/ProJaymmer">Jay's Github</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "30rem" }}>
            {/* <Card.Img variant="left" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>Keith Rodriguez</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Austin, TX
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Keith's Portfolio</Card.Link>
              <Card.Link href="https://github.com/keithro">Keith's Github</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
