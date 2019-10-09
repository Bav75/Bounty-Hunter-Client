import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBounties } from '../actions/fetchBounties';
import BountyList from '../components/bounties/BountyList';

class BountyContainer extends Component {

    componentDidMount() {
        this.props.fetchBounties(this.props.user.id);
    };

    renderBountyList = () => {
        if (this.props.bounties.loading) {
            return (
                <p>Loading marked bounties...</p>
            );
        } else {
            return (
                <BountyList bounties={this.props.bounties.content} />
            );
        };
    };

    render() {
        return (
            <div className="BountyContainer">
                I'm the bounty container 
                {this.renderBountyList()}
            </div>
        );
    };
};

const mapStateToProps = ( { user, bounties } ) => ({
    user,
    bounties
});

export default connect(mapStateToProps, { fetchBounties })(BountyContainer);