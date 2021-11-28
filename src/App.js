import React, {useState} from 'react'
import { Link, Routes, Route, Navigate } from "react-router-dom";

import Navigation from "./components/Navigation";
import OwnerHome from "./components/OwnerHome";
import WalkerHome from "./components/WalkerHome";
import Welcome from './components/Welcome'
import Register from "./components/Register";
import Team from './components/Team';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";

function App() {
  const [username, setUsername] = useState()

  return (
		<div className='App'>
			<header>
				<Navigation setUsername={setUsername} />
			</header>
			{/* <Welcome /> */}
			<Routes>
				<Route path='/' element={<Welcome />}>
					{/* <Route path='/edit' element={<Edit />} /> */}
				</Route>
				<Route path='/owner' element={<OwnerHome />}>
					{/* <Route path='/edit' element={<Edit />} /> */}
				</Route>
				<Route path='/walker' element={<WalkerHome />}>
					{/* <Route path='/edit' element={<Edit />} /> */}
				</Route>
				<Route path='/register' element={<Register />}>
					{/* <Route path='/edit' element={<Edit />} /> */}
				</Route>
				<Route path='/team' element={<Team />} />
			</Routes>
		</div>
	);
}

export default App;

// you can nest routes now, so the Edit route becomes /owner/edit for when we edit a profile
