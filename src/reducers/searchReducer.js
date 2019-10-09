export default function searchReducer(
    state = { content: [], loading: false}, action 
) {
    switch (action.type) {
        case 'LOADING':
            return {loading: true, content: [...state.content]}
        case 'FETCH':
            return {loading: false, content: action.searches};
        default:
            return state;
    };
};