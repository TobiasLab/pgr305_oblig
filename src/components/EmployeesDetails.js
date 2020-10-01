import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const EmployeesDetails = (props) => {

    /*
    I know this fuction is kind of redundant. I spent too much time actually trying to get this map to work the way I wanted, then remembered that map only
    works on actual arrays. So I've done the transporting of data with props in two different ways just to show that I actually know how to use a
    */
    let getUsers = () => {
        return props.projectData.Projects.map((user, i) => {
            return (
                <Col key={`e-${i}`} xl={12} className="mb-2">
                    <article>
                        <h3>{user}</h3>
                    </article>
                </Col>
            )
        });
    }


    return (
        <Row>
            <h3>{props.data[props.state].Name + "'s"} current projects</h3>
            {getUsers()}
        </Row>
    );
}

export default EmployeesDetails;