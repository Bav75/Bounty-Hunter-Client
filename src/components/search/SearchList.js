import React, { Component } from 'react';
import Search from './Search';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListGroup from 'react-bootstrap/ListGroup'
import { connect } from 'react-redux';


class SearchList extends Component {


    render () {
        // console.log("Generated from within searchList")
        // console.log(this.props)

        // const searches = this.props.searches.map(
        //     (search, index) => {
        //         return (
        //         <Search key={index} {...search} markBounty={this.props.markBounty} userId={this.props.userId}/>
        //         )
        //     }
        // );

        console.log("Logging props", this.props);

        const existing_bounties = this.props.bounties.content.map(bounty => {
            return bounty.title
        });

        const filtered_searches = this.props.searches.filter(search => {
            return !existing_bounties.includes(search.title)
        })

        const searches = filtered_searches.map(
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
                    {searches}
                </ListGroup>
            </Tab>  
        </Tabs> 
        )
            /* <Tab eventKey="page-2" title="Page 2">
                <ListGroup>
                    {searches.slice(10, 20)}
                </ListGroup>
            </Tab>   
            <Tab eventKey="page-3" title="Page 3">
                <ListGroup>
                    {searches.slice(20)}
                </ListGroup>
            </Tab>   
        </Tabs> */
        // );
    };
};

const mapStateToProps = ( { bounties } ) => ({
    bounties
});

export default connect(mapStateToProps)(SearchList);
