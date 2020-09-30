import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const EmployeesDetails = (props) => {

    let getUsers = () => {
        return props.data.Projects.map((user, i) => {
            return (
                <Col key={`e-${i}`} xl={12} className="mb-2">
                    <article>
                        <h3>{user}</h3>
                    </article>
                </Col>
            )
        })
    }


    return (
        <Row>
            {getUsers()}
        </Row>
    );
}

export default EmployeesDetails;