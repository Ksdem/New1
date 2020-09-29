import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dataReducer from "./data-reducer";
import usersReducer from "./users-reducer";



let reducers=combineReducers({
    profile:profileReducer,
    data: dataReducer,
    usersPage:usersReducer
});


let store=createStore(reducers);
window.store=store;

export default store;