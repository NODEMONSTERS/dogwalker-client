import React, { Component } from "react";
import daniel from '../daniel.png';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './Team.css';

const Team = () => {
  return (
    
    <Container>
      <h1>Meet the Team</h1>
      
      <Row>
        <Col>
          <Card className={"team-cards"} style={{ width: "30rem" }}>
            <img className={"team-pics"} src={"https://avatars.githubusercontent.com/u/7718408?s=400&u=5a3360e226d9bbc54c877ecae751898886fa86cf&v=4"} alt={"Alishia"} />
            {/* <Card.Img variant="left" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>Alyshia Bentley</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Tacoma, WA
              </Card.Subtitle>
              <Card.Text>
                Alyshia worked on the registration and login portion of the project. In her free time she enjoys skiing, gardening, and chicken tending.
              </Card.Text>
              {/* <Card.Link href="#">Alyshia's Portfolio</Card.Link> */}
              <Card.Link href="https://github.com/lyshia">Alyshia's Github</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={"team-cards"} style={{ width: "30rem" }}>
            <img className={"team-pics"} src={daniel} alt={"Daniel"} />
            {/* <Card.Img variant="left" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>Daniel An</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Seattle, WA
              </Card.Subtitle>
              <Card.Text>
              Daniel worked on the Dog walker routes of the project as well as many front end applications. In his free time he enjoys playing games, hanging out with buds, and eating, he loves, eating.
              </Card.Text>
              {/* <Card.Link href="#">Daniel's Portfolio</Card.Link> */}
              <Card.Link href="https://github.com/dma151">Daniel's Github</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className={"team-cards"} style={{ width: "30rem" }}>
            <img className={"team-pics"} src={"https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/218234838_10157879337806927_6722350777736473355_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=H-xoQ7EhPX8AX8fcyyi&_nc_ht=scontent-lax3-1.xx&oh=0d8809a38a3313aace893a42831cc4d7&oe=61AAAADB"} alt={"Jay"} />
            {/* <Card.Img variant="left" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>Jay Nguyen</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Los Angeles, CA
              </Card.Subtitle>
              <Card.Text>
              Jay deployed both the front and back ends of our project as well as “CODEpendently” pair-programed with Daniel and Keith. In his free-time he enjoys hiking with his husky, Malygos, and reliving his childhood nostalgia that is Guild Wars [1].
              </Card.Text>
              {/* <Card.Link href="#">Jay's Portfolio</Card.Link> */}
              <Card.Link href="https://github.com/ProJaymmer">Jay's Github</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className={"team-cards"} style={{ width: "30rem" }}>
            <img className={"team-pics"} src={"https://ca.slack-edge.com/T0351JZQ0-U02F977H6LC-edbbcc74db3b-512"} alt={"Keith"} />
            {/* <Card.Img variant="left" src="holder.js/100px180?text=Image cap" /> */}
            <Card.Body>
              <Card.Title>Keith Rodriguez</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Austin, TX
              </Card.Subtitle>
              <Card.Text>
                Keith worked on setting up the api routes, the front end for the owner as well as functionality of adding and editing the dogs. In his free time Keith likes biking, hiking, camping and trying to learn spanish.
              </Card.Text>
              {/* <Card.Link href="#">Keith's Portfolio</Card.Link> */}
              <Card.Link href="https://github.com/keithro">Keith's Github</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Team;
