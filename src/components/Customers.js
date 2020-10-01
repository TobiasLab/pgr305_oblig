import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import expressVPN from '../images/expressVPN.png';
import benQ from '../images/benQ.png';
import lg from '../images/lg.png';
import ibm from '../images/ibm.png';
import microsoft from '../images/microsoft.png';
import xiaomi from '../images/xiaomi.png';






const Customers = () => {

    const CustomerObject = [
        {
            companyName: "ExpressVPN",
            image: expressVPN,
            description: "Unbelievably Fast VPN.",
        },
        {
            companyName: "Microsoft",
            image: microsoft,
            description: "American multinational technology company, develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        },
        {
            companyName: "IBM",
            image: ibm,
            description: "International Business Corporation multinational technology company.",
        },
        {
            companyName: "Xiaomi",
            image: xiaomi,
            description: "Chinese multinational electronics company.",
        },
        {
            companyName: "LG Electronics Inc.",
            image: lg,
            description: "LG Electronics is a South Korean multinational electronics company.",
        },
        {
            companyName: "BenQ",
            image: benQ,
            description: "BenQ Corporation is a Taiwanese multinational company that sells and markets technology products, consumer electronics, computing and communications devices.",
        }
    ]


    let getCustomers = () => {
        return CustomerObject.map((customer, i) => {
            return (
                <Col key={`e-${i}`} xs={12} xl={4}>
                    <Card>
                        <Card.Img src={customer.image}/>
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