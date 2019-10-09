import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBounties } from '../actions/fetchBounties';

class BountyContainer extends Component {

    componentDidMount() {
        this.props.fetchBounties(this.props.user.id);
    };

    // renderSearchList = () => {
    //     if (this.props.searches.loading) {
    //         return (
    //             <p>Loading...</p>
    //         );
    //     } else {
    //         return (
    //             <SearchList searches={this.props.searches.content} markBounty={this.props.markBounty} userId={this.props.user.id}/>
    //         );
    //     };
    // };

    render() {
        return (
            <div className="BountyContainer">
                I'm the bounty container 
                {/* {this.renderSearchList()} */}
            </div>
        );
    };
};

const mapStateToProps = ( { user, bounties } ) => ({
    user,
    bounties
});

export default connect(mapStateToProps, { fetchBounties })(BountyContainer);