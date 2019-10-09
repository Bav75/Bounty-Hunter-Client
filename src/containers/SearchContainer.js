import React, { Component } from 'react';
import SearchList from '../components/search/SearchList';
import { connect } from 'react-redux';
import { fetchSearches } from '../actions/fetchSearches';

class SearchContainer extends Component {

    componentDidMount() {
        this.props.fetchSearches();
    };

    renderSearchList = () => {
        if (this.props.searches.loading) {
            return (
                <p>Loading...</p>
            );
        } else {
            return (
                <SearchList searches={this.props.searches.content}/>
            );
        };
    };

    render() {
        return (
            <div className="SearchContainer">
                {this.renderSearchList()}
            </div>
        );
    };
};

const mapStateToProps = ( { searches } ) => ({
    searches
});

export default connect(mapStateToProps, { fetchSearches })(SearchContainer);