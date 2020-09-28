import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/container';
import Customers from './components/Customers';
import Employees from './pages/Employees';
import Projects from './components/Projects';
import Home from './pages/Home';
import About from './pages/About';

function App() {

  return (
    <>
        <Router>

            <Navbar bg="dark" variant="dark"  className="mb-5">
                <Navbar.Brand> Consulting</Navbar.Brand>
                <Nav>
                    <Nav.Link as={Link} to="/">Hjem</Nav.Link>
                    <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
                    <Nav.Link as={Link} to="/employees">Employees</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                    <Nav.Link as={Link} to="/about">About us</Nav.Link>
                </Nav>
            </Navbar>

            <Container>
                <main>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/customers" component={Customers}></Route>
                        <Route path="/employees" component={Employees}></Route>
                        <Route path="/projects" component={Projects}></Route>
                        <Route path="/about" component={About}></Route>
                    </Switch>
                </main>
            </Container>

        </Router>
    </>
  );
}

export default App;
