import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import React from 'react';
import { Navbar } from 'react-bootstrap';

function App() {

  return (
    <>
        <Router>

            <Navbar bg="dark" variant="dark"  className="mb-5">
                <Navbar.Brand> Consulting</Navbar.Brand>
            </Navbar>

        </Router>
    </>
  );
}

export default App;
