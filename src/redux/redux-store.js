import { combineReducers, createStore } from "redux";
import messagesReducer from "./messagesReducer";


let reducers = combineReducers({
    messagePage: messagesReducer,

});

let store = createStore(reducers);



export default store;