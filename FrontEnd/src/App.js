import Home from './components/Home';
import Anotacao from './components/Anotacao';
import Sobre from './components/Sobre';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <div className="App">
      <h1 style={{textAlign : 'center'}} >Minha Aplicação</h1>
      <BrowserRouter>
      <Navbar bg="dark" data-bs-theme="dark" style={{textAlign : 'inherit'}}>
      <Container> 
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Página Inicial</Nav.Link>
        <Nav.Link as={Link} to="/anotacao">Minhas Anotações</Nav.Link>
        <Nav.Link as={Link} to="/sobre">Sobre</Nav.Link>
      </Nav>
      </Container>
      </Navbar>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/anotacao" element={<Anotacao/>}></Route>
        <Route path="/sobre" element={<Sobre/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;