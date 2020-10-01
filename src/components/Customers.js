import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';





const Customers = () => {

    const CustomerObject = [
        {
            companyName: "ExpressVPN",
            image: "../images/expressVPN.png",
            description: "Unbelievably Fast VPN.",
        },
        {
            companyName: "Microsoft",
            image: "../images/microsoft.png",
            description: "American multinational technology company, develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        },
        {
            companyName: "IBM",
            image: "../images/ibm.png",
            description: "International Business Corporation multinational technology company.",
        },
        {
            companyName: "Xiaomi",
            image: "../images/xiaomi.png",
            description: "Chinese multinational electronics company.",
        },
        {
            companyName: "LG Electronics Inc.",
            image: "../images/lg.png",
            description: "LG Electronics is a South Korean multinational electronics company.",
        },
        {
            companyName: "BenQ",
            image: "../images/benQ.png",
            description: "BenQ Corporation is a Taiwanese multinational company that sells and markets technology products, consumer electronics, computing and communications devices.",
        }
    ]


    let getCustomers = () => {
        return CustomerObject.map((customer, i) => {
            {console.log(customer.image)}
            return (
                <Col key={`e-${i}`} xs={12} xl={4}>
                    <Card>
                        <Card.Img src={require(customer.image)}/>
                        <Card.Body>
                            <h3>{customer.companyName}</h3>
                            <p>{customer.description}</p>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })
    }


    return (
        <Row>
            {getCustomers()}
        </Row>
    )
}

export default Customers;