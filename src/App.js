import React, { useState } from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';

import Navigation from './components/Navigation';
import OwnerHome from './components/OwnerHome';
import WalkerHome from './components/WalkerHome';
import Welcome from './components/Welcome';
import Register from './components/Register';
import Team from './components/Team';
import Requests from './components/Requests';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';

function App() {
	const [userId, setUserId] = useState({});

	return (
		<div className='App'>
			<header>
				<Navigation setUserId={setUserId} />
			</header>
			{/* <Welcome /> */}
			<Routes>
				<Route path='/' element={<Welcome setUserId={setUserId} />} />
				<Route path='/owner' element={<OwnerHome userId={userId} />} />
				<Route path='/walker' element={<WalkerHome userId={userId} />} />
				<Route path='/walker/requests' element={<Requests userId={userId} />} />
				<Route path='/register' element={<Register />} />
				<Route path='/team' element={<Team />} />
			</Routes>
		</div>
	);
}

export default App;

// you can nest routes now, so the Edit route becomes /owner/edit for when we edit a profile
