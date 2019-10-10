import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Bounty = (props) => {
    return (
        <Card>
            <p>{props.title}</p>
            <p>{props.bounty_amount}</p>
            <p>{props.bounty_closes_date}</p>
        </Card>
    );
};

export default Bounty;