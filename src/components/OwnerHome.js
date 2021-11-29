import React, { useState, useEffect } from "react";
import Dog from "./Dog";
import Walker from "./Walker";
import AddDogForm from "./AddDogForm";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

const OwnerHome = (props) => {
  // console.log(props);

  // Temp id. Will need to pass props.id from login page
  const userId = "61a3f92faf1b5b76de8c836b";

  const [ownerInfo, setOwnerInfo] = useState({
    name: '',
    city: '',
    dogs: [],
  });

  const [walkerData, setWalkerData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/owner/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.owner);
        setOwnerInfo(data.owner);
      })
      .then(() => {
        fetch(`http://localhost:4000/walker`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data.allWalkers);
            setWalkerData(data.allWalkers);
          })
      })
      .catch((e) => console.log(e));
  }, []);


  
// Adding a new dog
  const handleAddDogClick = () => {
    console.log('you are adding a dog')
    // 1st API call to create dog
    // returns dog data (including id) = newDog

    // 2nd API call needs dog id
    // const url = exampleurl/oqner/98712348/addDog/12352345
  }

  const dogListJSX = ownerInfo.dogs.map((dog) => {
    return <Dog dog={dog} />
  });

  const walkerList = walkerData.map((walker) => {
    return <Walker walker={walker} />
  })

  return (
    <Container>
      <h1>Owner homepage</h1>
      <div>
        <h2>{ownerInfo.name}</h2>
        <h4>{ownerInfo.city}</h4>
      </div>
      <Container>
        <h2>My Dogs</h2>
        {/* <Button variant="primary" onClick={handleAddDogClick}>Add a Dog</Button> */}
        <AddDogForm />
        <Row>
          {dogListJSX}
        </Row>
      </Container>
      <Container>
        <h2>Dog Walkers</h2>
        <Row>
          {walkerList}
        </Row>
      </Container>
    </Container>
  );
};

export default OwnerHome;
