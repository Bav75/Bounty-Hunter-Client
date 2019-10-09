export default function bountyReducer(
    state = { content: [], loading: false}, action 
) {
    switch (action.type) {
        case 'LOADING':
            return {loading: true, content: [...state.content]}
        case 'MARK_BOUNTY':
            return {loading: false, content: [...state.content, action.bounty]};
        case 'FETCH':
            return {loading: false, content: action.content};
        default:
            return state;
    };
};