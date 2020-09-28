import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

const Employees = () => {

    let { url, path } = useRouteMatch()

    let user1 = {
        Projects: [],
        Name: "Christian",
        Age: "21"
    }

    return (
        <Row>
            <Col>
                <section>
                    <h3>{user1.Name}</h3>
                </section>
            </Col>
        </Row>
    )
}

export default Employees;