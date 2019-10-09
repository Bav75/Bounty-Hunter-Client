import React from 'react';
import { Link } from 'react-router-dom';
const Search = (props) => {
    return (
    <li> <a onClick={() => {window.open(props.link, '_blank')}}>{props.title}</a> <button onClick={() => {console.log("Bounty Marked!")}}>Mark Bounty</button></li>
    );
};

export default Search;

// onClick={() => {window.open(props.link, '_blank')}}