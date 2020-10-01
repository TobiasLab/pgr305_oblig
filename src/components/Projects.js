import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () => {

    let Projects = [
        {
            Name: "Microsoft Project",
            Owner: "Christian"
        },
        {
            Name: "ExpressVPN Project",
            Owner: "Christian"
        },
        {
            Name: "IBM Project",
            Owner: "Tobias"
        },
        {
            Name: "Xiaomi Project",
            Owner: "Tobias"
        },
        {
            Name: "LG Project",
            Owner: "Edwin"
        },
        {
            Name: "BenQ Project",
            Owner: "Edwin"
        }
    ];

    let getProjects = () => {
        return Projects.map((project, i) => {
            return (
                <Col key={`e-${i}`} xl={12}>
                    <nav>
                        <ul>
                            <li>
                                <h4>{project.Name}</h4>
                                <p>{project.Owner}</p>
                            </li>
                        </ul>
                    </nav>
                </Col>
            )
        });
    }

    return (
        <Row>
            <Col>
                <h2>Current Project</h2>
            </Col>
            {getProjects()}
        </Row>
    );
}

export default Projects;