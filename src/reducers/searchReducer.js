export default function searchReducer(
    state = [], action 
) {
    switch (action.type) {
        case 'FETCH':
            return [...action.searches];
        default:
            return state;
    };
};