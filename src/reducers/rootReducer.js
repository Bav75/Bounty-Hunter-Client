import { combineReducers } from "redux";
import usersReducer from './usersReducer';
import sessionReducer from './sessionReducer';
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
    user: usersReducer,
    session: sessionReducer,
    searches: searchReducer
});

export default rootReducer