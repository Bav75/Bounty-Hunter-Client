const BASE_URL = 'http://localhost:3002';
const BOUNTY_URL = `${BASE_URL}/bounties`;

export const markBounty = (search) => {

    const configObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            search
        })
      };

    return (dispatch) => {
        dispatch({type: 'MARKING'});
        fetch(BOUNTY_URL, configObject).then(response => {return response.json()})
        .then(responseJSON => console.log(responseJSON));
    };
};