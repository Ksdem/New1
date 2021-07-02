import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dataReducer from "./data-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';



let reducers=combineReducers({
    profile:profileReducer,
    data: dataReducer,
    usersPage:usersReducer,
    auth:authReducer
});


let store=createStore(reducers, applyMiddleware(thunkMiddleware));
window.store=store;

export default store;