import React, { Component } from 'react';

class SearchList extends Component {
    render () {
        console.log("Generated from within searchList")
        console.log(this.props)
        return (
        <div>I'm a search list</div>
        );
    };
};

export default SearchList;
