export const fetchBounties = (userId) => {
    const BASE_URL = 'http://localhost:3002';
    const BOUNTY_URL = `${BASE_URL}/fetch`;

    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            userId
        })
      };
    
    return (dispatch) => {
        dispatch({type: 'LOADING_BOUNTIES'});
        fetch(BOUNTY_URL, configObject).then(response => {return response.json()})
        .then(responseJSON => dispatch({
            type: 'FETCHING_BOUNTIES',
            content: responseJSON.content
        }));
    };
};
