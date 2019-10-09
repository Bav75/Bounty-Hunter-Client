import React from 'react';

const Bounty = (props) => {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.bounty_amount}</p>
            <p>{props.bounty_closes_date}</p>
        </div>
    );
};

export default Bounty;