export const removeBounty = (bountyId) => {


    // const BASE_URL = 'http://localhost:3002';
    const BASE_URL = 'https://bount-hunter-api.herokuapp.com/';
    const BOUNTY_URL = BASE_URL + "bounties" + bountyId;


    const configObject = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            bountyId
        })
      };

    return (dispatch) => {
        dispatch({type: 'LOADING_BOUNTIES'});
        fetch(BOUNTY_URL, configObject).then(response => {return response.json()})
        .then(responseJSON => {
            dispatch({
                type: 'DELETE_BOUNTY',
                bountyId
            });
        });
    };
};