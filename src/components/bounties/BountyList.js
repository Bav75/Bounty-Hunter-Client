import React, { Component } from 'react';
import Bounty from './Bounty';
// import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'

class BountyList extends Component {
    render () {

        const bounties = this.props.bounties.map(
            (bounty) => {
                return (<Bounty key={bounty.id} {...bounty}/>)
            }
        );

        return (
            <div>
                {bounties}
            </div>
        );
    };
};

export default BountyList;
