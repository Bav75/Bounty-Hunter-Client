import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

const Bounty = (props) => {
    // console.log(props)

    let unix_time = parseInt(props.bounty_closes_date * 1000);
    let ending_date = new Date(unix_time);

    return (
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                <p className="link-styling">{props.title}</p>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <button className="link-styling" onClick={() => {window.open(props.link, '_blank')}}>View This Bounty</button>
                    <br/>
                    Bounty Reward: +{props.bounty_amount} Reputation
                    <br/>
                    Bounty End Date: {ending_date.toString()}
                    <br/>
                    <button className="small-button-styling" onClick={() => (props.remove(props.id))}>Stop Tracking This Bounty</button>
                    </Card.Body>
                </Accordion.Collapse>
                
            </Card>
        </Accordion>
    );
};

export default Bounty;