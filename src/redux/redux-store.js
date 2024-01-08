import { combineReducers, legacy_createStore as createStore } from "redux";
import messagesReducer from "./messagesReducer";
import MainReducer from "./MainReducer";
import usersReducer from "./usersReduser";

let reducers = combineReducers({
    messagesPage: messagesReducer,
    novostiPage: MainReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);

export default store;