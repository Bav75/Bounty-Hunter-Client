import React, { Component } from 'react';
import Search from './Search';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'

class SearchList extends Component {


    render () {
        // console.log("Generated from within searchList")
        // console.log(this.props)

        const searches = this.props.searches.map(
            (search, index) => {
                return (
                <Search key={index} {...search} markBounty={this.props.markBounty} userId={this.props.userId}/>
                )
            }
        );
        

        return (
        <Tabs defaultActiveKey="page-1">
            <Tab eventKey="page-1" title="Page 1">
                <ListGroup>
                    {searches.slice(0, 10)}
                </ListGroup>
            </Tab>   
            <Tab eventKey="page-2" title="Page 2">
                <ListGroup>
                    {searches.slice(10, 20)}
                </ListGroup>
            </Tab>   
            <Tab eventKey="page-3" title="Page 3">
                <ListGroup>
                    {searches.slice(20)}
                </ListGroup>
            </Tab>   
        </Tabs>
        );
    };
};

export default SearchList;
