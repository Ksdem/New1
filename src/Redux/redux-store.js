import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dataReducer from "./data-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';



let reducers=combineReducers({
    profile:profileReducer,
    data: dataReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form: formReducer
});


let store=createStore(reducers, applyMiddleware(thunkMiddleware));
window.store=store;

export default store;