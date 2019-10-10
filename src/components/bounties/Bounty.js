import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Bounty = (props) => {
    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                {props.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    {props.bounty_amount}
                    {props.bounty_closes_date}
                    </Card.Body>
                </Accordion.Collapse>
                
            </Card>
        </Accordion>
    );
};

export default Bounty;