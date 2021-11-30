import EditDogForm from "./EditDogForm";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./Dog.css";

const Dog = (props) => {
  return (
    <Col>
      <Card style={{ width: "15rem" }} id={"dog-card"} >
        <img id={"dog-img"} src={props.dog.picture} alt={props.dog.name}/>
        <Card.Body id={"dog-card-body"}>
          <Card.Title>{props.dog.name}</Card.Title>
          <EditDogForm dog={props.dog} ownerInfo={props.ownerInfo} setOwnerInfo={props.setOwnerInfo} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Dog;
