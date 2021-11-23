import './App.css';
import Container from 'react-bootstrap/Container'
import Navigation from './components/Navigation';
import { Link, Routes, Route, Navigate } from 'react-router-dom'
import OwnerHome from './components/OwnerHome';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
        {/* Routes will go here */}
        <Routes>
          <Route path='/owner' element={<OwnerHome />}>
            {/* <Route path='/edit' element={<Edit />} /> */}
          </Route>
        </Routes>
    </div>
  );
}

export default App;

// you can nest routes now, so the Edit route becomes /owner/edit for when we edit a profile