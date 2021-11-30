import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Walker = (props) => {
    let data = {
        ownerName: "Daniel",
        ownerEmail: "daniel@gmail.com",
        dogs: [
            {name: "Mikey", breed: "Golden"},
            {name: "Tyler", breed: "Mutt"}
        ]
    }
  const handleClick = () => {
      const makeApiCall = async () => {
        const makeRequest = await fetch(
					`https://pacific-wave-42416.herokuapp.com/walker/${props.walker._id}/addRequest`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/JSON',
						},
						body: JSON.stringify(data),
					}
				);
      }
  };
  return (
    <Col>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <img src={props.walker.picture} alt={props.walker.name} />
          <Card.Title>{props.walker.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.walker.city}
          </Card.Subtitle>
          <Button onClick={handleClick}>Request this Walker</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Walker;
