import React, { Component } from 'react';

class SearchList extends Component {
    render () {
        return (
        <div>I'm a search list, {this.props.searches[0].title}</div>
        );
    };
};

export default SearchList;
