import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dataReducer from "./data-reducer";



let reducers=combineReducers({
    profile:profileReducer,
    data: dataReducer
});


let store=createStore(reducers);
window.store=store;

export default store;