import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import EmployeeDetails from './EmployeesDetails';

import { BrowserRouter, Switch, Route, Link, useRouteMatch } from 'react-router-dom';

const Employees = () => {

    const [userIndex, setUserIndex] = useState(0);

    let { url, path } = useRouteMatch();

    let users = [
        {
            Name: "Christian",
            Age: 21,
            Projects: ["Microsoft Project", "ExpressVPN Project"]
        },
        {
            Name: "Edwin",
            Age: 21,
            Projects: ["LG Project", "BenQ Project"]
        },
        {
            Name: "Tobias",
            Age: 24,
            Projects: ["IBM Project", "Xiaomi Project"]
        }
    ];

    return (
        <BrowserRouter>
            <Row>
                <Col>
                    <h1>Employees</h1>

                    <nav>
                        <ul>
                            <li onClick={() => setUserIndex(0)}><Link to={`${url}/EmployeesDetails`}>{users[0].Name}</Link></li>
                            <li onClick={() => setUserIndex(0 + 1)}><Link to={`${url}/EmployeesDetails`}>{users[1].Name}</Link></li>
                            <li onClick={() => setUserIndex(0 + 2)}><Link to={`${url}/EmployeesDetails`}>{users[2].Name}</Link></li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path={`${path}/EmployeesDetails`}>
                            <EmployeeDetails data={users} projectData={users[userIndex]} state={userIndex} />
                        </Route>
                    </Switch>
                </Col>
            </Row>
        </BrowserRouter>
    );
}

export default Employees;
