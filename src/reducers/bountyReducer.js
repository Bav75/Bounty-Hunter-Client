export default function bountyReducer(
    state = { content: [], loading: false}, action 
) {
    switch (action.type) {
        case 'LOADING_BOUNTIES':
            return {loading: true, content: [...state.content]}
        case 'MARK_BOUNTY':
            return {loading: false, content: [...state.content, action.bounty]};
        case 'FETCHING_BOUNTIES':
            return {loading: false, content: action.content};
        case 'RE_RENDER':
            return {...state, loading: false};
        case 'DELETE_BOUNTY':
            const bounties = state.content.filter(bounty => bounty.id !== action.bountyId);
            return {loading: false, content: bounties};
        default:
            return state;
    };
};