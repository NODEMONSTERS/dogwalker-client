import React, { useState, useEffect } from 'react';
import Dog from './Dog';
import Walker from './Walker';
import AddDogForm from './AddDogForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const OwnerHome = (props) => {

	const userId = props.userId;

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
				setOwnerInfo(data.owner);
			})
			.then(() => {
				fetch(`http://localhost:4000/walker`)
					.then((response) => response.json())
					.then((data) => {
						setWalkerData(data.allWalkers);
					});
			})
			.catch((e) => console.log(e));
	}, []);

	const dogListJSX = ownerInfo.dogs.map((dog) => {
		return <Dog dog={dog} setOwnerInfo={setOwnerInfo} ownerInfo={ownerInfo} />;
	});
	const walkerList = walkerData.map((walker) => {
		return <Walker walker={walker} />;
	});

	return (
		<Container>
			<h1>Owner homepage</h1>
				<div>
				<h2>Hello {ownerInfo.name}</h2>
				<h4>{ownerInfo.city}</h4>
			</div>
			<Container>
				<h2>My Dogs</h2>
				<AddDogForm userId={userId} setOwnerInfo={setOwnerInfo} />
				<Row>{dogListJSX}</Row>
			</Container>
			<Container>
				<h2>Dog Walkers</h2>
				<Row>{walkerList}</Row>
			</Container>
		</Container>
	);
};

export default OwnerHome;
