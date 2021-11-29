import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const Walker = (props) => {
  return (
    <Col>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <img src={props.walker.picture} alt={props.walker.name} />
          <Card.Title>{props.walker.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.walker.city}
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Walker;
