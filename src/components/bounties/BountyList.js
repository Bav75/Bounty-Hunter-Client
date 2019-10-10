import React, { Component } from 'react';
import Bounty from './Bounty';
// import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import { connect } from 'react-redux';
import { removeBounty } from '../../actions/removeBounty';

class BountyList extends Component {
    render () {

        const bounties = this.props.bounties.map(
            (bounty) => {
                return (<Bounty key={bounty.id} {...bounty} remove={this.props.removeBounty}/>)
            }
        );

        return (
            <div>
                {bounties}
            </div>
        );
    };
};


export default connect(null, { removeBounty })(BountyList);
