import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Customers from '../components/Customers';

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