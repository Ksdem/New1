import React from 'react';


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store={

    _state: {
        profile: {
            posts: [
                {message: 'Hi', likesCount: '1'},
                {message: 'Hello', likesCount: '5'}

            ],
            newPostText:'Dem'
        },
        data: {
            animalsData: [
                {id: 'Fox',
                    ava: 'https://image.shutterstock.com/image-photo/national-park-cotopaxi-ecuador-wildlife-260nw-1669461565.jpg'
                },
                {id: 'Hare',
                    ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiPZDsRVv9f9x8HXQfQZz4Aq-XH4ApmVkXKpLvaFSI1aQ3X1A-pT7jS6vw0yAMGipbayuQYp_Qu0P3ELNYATyjgQ&usqp=CAU&ec=45688577'
                },
                {id: 'Squirrel', ava: 'https://simple-fauna.ru/wp-content/uploads/2017/10/obyknovennaya-belka.jpg'},
                {id: 'Hedgehog',
                    ava: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-09/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202019-09-18%20%D0%B2%200.54.49.jpg?itok=KGrumvl6'
                },
                {id: 'Bear',
                    ava: 'https://img.gazeta.ru/files3/823/12342823/Depositphotos_65052241_l-2015-pic905-895x505-35231.jpg'
                },
                {id: 'Wolf', ava: 'https://cs13.pikabu.ru/post_img/big/2019/02/03/4/1549167685160735519.jpg'}

            ],
            messagesData: [
                {id:1, message: 'Hi'},
                {id:2,message: 'You'},
                {id:3,message: 'Yes'},
                {id:4,message: 'Ks'},
                {id:5,message: 'Dem'}
            ],

            newMessageBody:''

        }

    },
    _callSubscriber(){
    },
    getState(){

        return this._state
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },

    dispatch(action){
        if (action.type===ADD_POST){
            let newPost={
                message:this._state.profile.newPostText,
                likesCount:0
            }
            this._state.profile.posts.push(newPost);
            this._state.profile.newPostText='';
            this._callSubscriber(this._state);
        }
        else  if (action.type===UPDATE_NEW_POST_TEXT){
            this._state.profile.newPostText=action.newText;
            this._callSubscriber(this._state);
        }
        else if(action.type===UPDATE_NEW_MESSAGE_BODY){
            this._state.data.newMessageBody=action.body;
            this._callSubscriber(this._state);
        }   else if(action.type===SEND_MESSAGE){
            let body= this._state.data.newMessageBody;
            this._state.data.newMessageBody='';
            this._state.data.messagesData.push({id:6,message:body});
            this._callSubscriber(this._state);
        }

    }

}

export   const addPostActionCreator=()=>({
        type: ADD_POST

})
export const updateNewPostTextActionCreator=(text)=>({
        type: UPDATE_NEW_POST_TEXT, newText:text
})
export   const sendMessageCreator=()=>({
        type: SEND_MESSAGE

})
export const updateNewMessageBodyCreator=(body)=>({
        type: UPDATE_NEW_MESSAGE_BODY, body:body
})





window.store=store;

export default store;

