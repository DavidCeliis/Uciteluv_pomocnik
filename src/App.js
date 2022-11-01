
import { Link, Routes, Route } from "react-router-dom"
import Home from "./pages/Main/Home"
import NotFound from "./pages/Special/NotFound";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './App.css';
import Number from "./pages/Main/Number";
import Count from "./pages/Main/Count";
import List from "./pages/Main/List";
import Settings from "./pages/Main/Settings";
import Student from "./pages/Main/Student";

const App = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">Učitelův pomocníček</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Number">Číslo</Nav.Link>
            <Nav.Link href="/Count">Odpočet</Nav.Link>
            <Nav.Link href="/Student">Student</Nav.Link>
            <Nav.Link href="/List">Seznam</Nav.Link>
            <Nav.Link href="/Settings" className="justify-content-end">Nastavení</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
       <Route path="/" element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/Count" element={<Count/>}/>
      {/* <Route path="/Order/:number" element={<Order />} />
      <Route path="/Order" element={<Order />} /> */}
      <Route path="/List" element={<List />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Student" element={<Student />} />
      <Route path="/Number" element={<Number />} />
      <Route path="/Number/:min/:max" element={<Number />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
