import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Dog from "./Dog";
import Walker from "./Walker";

const OwnerHome = (props) => {
  console.log(props);

  // Temp id. Will need to pass props.id from login page
  const userId = "61a3f92faf1b5b76de8c836b";

  const [ownerInfo, setOwnerInfo] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/owner/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setOwnerInfo(data.owner);
      })
      .catch((e) => console.log(e));
  }, []);

// Adding a new dog
  const onSubmit = () => {
    // 1st API call to create dog
    // returns dog data (including id) = newDog

    // 2nd API call needs dog id
    // const url = exampleurl/oqner/98712348/addDog/12352345
  }

  return (
    <Container>
      <h1>Owner homepage</h1>
      <Container>
        <h2>My Dogs</h2>
        <Row>
          <Dog />
        </Row>
      </Container>
      <Container>
        <h2>Dog Walkers</h2>
        <Row>
          <Walker />
        </Row>
      </Container>
    </Container>
  );
};

export default OwnerHome;
