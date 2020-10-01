import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Employees from '../components/Employees';

import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

const Employee = () => {

    return (
        <Row>
            <Col>
                <main>
                    <Employees />
                </main>
            </Col>
        </Row>
    );
}

export default Employee;