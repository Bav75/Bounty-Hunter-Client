import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Bounty = (props) => {
    console.log(props)

    let unix_time = parseInt(props.bounty_closes_date * 1000);
    let ending_date = new Date(unix_time);

    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                {props.title}
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    Bounty Reward: +{props.bounty_amount} Reputation
                    <br/>
                    Bounty End Date: {ending_date.toString()}
                    <br/>
                    <a href={props.link}>View This Bounty</a>
                    <br/>
                    <button onClick={() => (props.remove(props.id))}>Stop Tracking This Bounty</button>
                    </Card.Body>
                </Accordion.Collapse>
                
            </Card>
        </Accordion>
    );
};

export default Bounty;