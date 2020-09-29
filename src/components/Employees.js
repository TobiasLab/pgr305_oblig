import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState } from 'react';

const Employees = () => {

    const [count, setCount] = useState(0);

    let users = [
        {
            Name: "Christian",
            Age: 21,
            Projects: []
        },
        {
            Name: "Edwin",
            Age: 21,
            Projects: []
        },
        {
            Name: "Tobias",
            Age: 24,
            Projects: []
        }
    ];

    return (
        <Row>
            <Col>
                <section>
                    <li>
                        {users[0].Name} 
                    </li>
                    <li>
                        {users[1].Name}
                    </li>
                    <li>
                        {users[2].Name}
                    </li>
                </section>
            </Col>
        </Row>
    );
}

export default Employees;
