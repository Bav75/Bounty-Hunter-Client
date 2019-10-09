import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import sessionReducer from './sessionReducer';
import searchReducer from "./searchReducer";
import bountyReducer from "./bountyReducer";

const rootReducer = combineReducers({
    user: usersReducer,
    session: sessionReducer,
    searches: searchReducer,
    bounties: bountyReducer
});

export default rootReducer