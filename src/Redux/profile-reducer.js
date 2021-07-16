import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {message: 'Hi', likesCount: '1'},
        {message: 'Hello', likesCount: '5'}

    ],
    profile: null,
    status:''
};


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        }

        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
               status: action.status
            };
        }
        default:
            return state;
    }


}
export const addPostActionCreator = (newPostText) => ({
    type: ADD_POST,newPostText

})
export const setUsersProfile = (profile) => ({
    type: SET_USERS_PROFILE, profile

})
export const setStatus = (status) => ({
    type: SET_STATUS, status

})
export const getUsersProfile =(userId)=>(dispatch)=>{
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data));
    })

}
export const getStatus =(userId)=>(dispatch)=>{
    profileAPI.getStatus(userId).then(response => {

        dispatch(setStatus(response.data));
    })

}
export const updateStatus =(status)=>(dispatch)=>{
    profileAPI.updateStatus(status).then(response => {
        if(response.data.resultCode===0){
        dispatch(setStatus(status))}
    })

}
export default profileReducer;