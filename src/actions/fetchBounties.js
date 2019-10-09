export const fetchBounties = () => {
    const BASE_URL = 'http://localhost:3002';
    const BOUNTY_URL = `${BASE_URL}/bounties`;
    
    return (dispatch) => {
        dispatch({type: 'LOADING'});
        fetch(BOUNTY_URL).then(response => {return response.json()})
        .then(responseJSON => console.log(responseJSON));
    };
};
