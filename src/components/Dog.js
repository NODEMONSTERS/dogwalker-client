import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import { propTypes } from "react-bootstrap/esm/Image";

const Dog = (props) => {
  return (
    <Col>
      <Card style={{ width: "15rem" }}>
        <Card.Body id={"dog-card"}>
          <img id={"dog-img"} src={props.dog.picture} alt={props.dog.name}/>
          <Card.Title>{props.dog.name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Dog;
