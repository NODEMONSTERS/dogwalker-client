import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from '../components/NavBar';
import { Link, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Container>
        {/* Routes will go here */}
      </Container>
    </div>
  );
}

export default App;
