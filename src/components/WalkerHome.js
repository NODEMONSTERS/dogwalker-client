import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const WalkerHome = () => {
  const [dogs, setDogs] = useState();

  useEffect(() => {
    const makeApiCall = async () => {
      const res = await fetch("http://localhost:4000/dog");
      const json = await res.json();
      setDogs(json.data);
    };
    makeApiCall();
  }, []);
  return (
    <Container>
      <Row>
        {dogs &&
          dogs.map((dog) => {
            return (
              <Col>
                <Card style={{ width: "10rem" }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
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