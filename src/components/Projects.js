import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Projects = () => {

    const [projects, setNewProject] = useState([
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
    ]);

    const [nameInput, setNameInput] = useState();
    const [nameValue, setNameValue] = useState();
    const [ownerInput, setOwnerInput] = useState();
    const [ownerValue, setOwnerValue] = useState();


    const handleChangeName = (e) => {
        setNameInput(e.target.value)
        setNameValue(e.target.name)
    }

    const handleChangeOwner = (e) => {
        setOwnerInput(e.target.value)
        setOwnerValue(e.target.name)
    }

    const handleClick = () => {
        const name = nameValue;
        const nameValues = nameInput;
        const owner = ownerValue
        const ownerValues = ownerInput;
        setNewProject(prevState => [...prevState, { [name]: nameValues, [owner]: ownerValues }]);
    }

    let getProjects = () => {
        return projects.map((project, i) => {
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
            <Col>
                <section>
                    <input
                        type="text"
                        placeholder="Enter new project name"
                        name="Name"
                        onChange={handleChangeName}
                    />
                    <input
                        type="text"
                        placeholder="Enter new project owner"
                        name="Owner"
                        onChange={handleChangeOwner}
                    />
                    <input
                        type="button"
                        onClick={handleClick}
                        value="Add new projects"
                    />
                </section>
            </Col>
        </Row>
    );
}

export default Projects;