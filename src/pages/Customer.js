import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Customers from '../components/Customers';

import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

const Customer = () => {

    return (
        <Row>
            <Col>
                <section>
                    <Customers />
                </section>
            </Col>
        </Row>
    );
}

export default Customer;