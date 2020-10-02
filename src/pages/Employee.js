import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Employees from '../components/Employees';

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