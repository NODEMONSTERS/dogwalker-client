import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import OwnerHome from "./components/OwnerHome";
import WalkerHome from "./components/WalkerHome";
import Welcome from './components/Welcome'
import Container from "react-bootstrap/Container";
import {useState} from 'react'
import Register from "./components/Register";

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
			</Routes>
		</div>
	);
}

export default App;

// you can nest routes now, so the Edit route becomes /owner/edit for when we edit a profile
