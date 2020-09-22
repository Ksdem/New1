const FOLLOW = 'FOLLOW';
const UN_FOLLOW = ' UN_FOLLOW';
const SET_USERS='SET_USERS';


let initialState={
        users: [
          /*  {id:1, photoUrl:'https://st4.depositphotos.com/12985790/19659/i/450/depositphotos_196591746-stock-photo-attractive-woman-pink-hair-pink.jpg',
                followed:false, fullName: 'Xeniya', status: 'I am a boss',
                location:{city:'Kazan', country:'Russia'}},
            {id:1,photoUrl:'https://st4.depositphotos.com/12985790/19659/i/450/depositphotos_196591746-stock-photo-attractive-woman-pink-hair-pink.jpg',
                followed:true,fullName: 'Alex', status: 'I am a boss too',
                location:{city:'Moscow', country:'Russia'}},
            {id:1,photoUrl:'https://st4.depositphotos.com/12985790/19659/i/450/depositphotos_196591746-stock-photo-attractive-woman-pink-hair-pink.jpg',
                followed:false,fullName: 'Tom', status: 'I am a boss too',
                location:{city:'Syktyvkar', country:'Russia'}},
*/


        ],
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case  FOLLOW:
            return {
                ...state,
                users:state.users.map(u=>{
                    if (u.id===action.userId) {
                        return {...u, followed:true}
                    }
                   return  u;
                })
            };

        case UN_FOLLOW:
            return {
            ...state,
            users:state.users.map(u=>{
                if (u.id===action.userId) {
                    return {...u, followed:false}
                }
                return  u;
            })
        };
        case SET_USERS:{
            return {...state, users:[...state.users, ...action.users]}
        }

        default:
            return state;
    }


}
export const followAC = (userId) => ({
    type: FOLLOW, userId

})
export const unFollowAC = (userId) => ({
    type: UN_FOLLOW,userId
})
export const setUserAC = (users) => ({
    type: SET_USERS,users
})
export default usersReducer;