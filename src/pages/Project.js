import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Projects from '../components/Projects';

const Project = () => {
    return (
        <Row>
            <Col>
                <section>
                    <Projects />
                </section>
            </Col>
        </Row>
    );
}

export default Project;