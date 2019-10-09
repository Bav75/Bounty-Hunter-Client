import React, { Component } from 'react';
import Bounty from './Bounty';

class BountyList extends Component {
    render () {

        const bounties = this.props.bounties.map(
            (bounty) => {
                return (<Bounty key={bounty.id} {...bounty}/>)
            }
        );

        return (
        <ul>
            {bounties}
        </ul>
        );
    };
};

export default BountyList;
