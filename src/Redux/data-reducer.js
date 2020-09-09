const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState={
    animalsData: [
        {
            id: 'Fox',
            ava: 'https://image.shutterstock.com/image-photo/national-park-cotopaxi-ecuador-wildlife-260nw-1669461565.jpg'
        },
        {
            id: 'Hare',
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSiPZDsRVv9f9x8HXQfQZz4Aq-XH4ApmVkXKpLvaFSI1aQ3X1A-pT7jS6vw0yAMGipbayuQYp_Qu0P3ELNYATyjgQ&usqp=CAU&ec=45688577'
        },
        {id: 'Squirrel', ava: 'https://simple-fauna.ru/wp-content/uploads/2017/10/obyknovennaya-belka.jpg'},
        {
            id: 'Hedgehog',
            ava: 'https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-09/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202019-09-18%20%D0%B2%200.54.49.jpg?itok=KGrumvl6'
        },
        {
            id: 'Bear',
            ava: 'https://img.gazeta.ru/files3/823/12342823/Depositphotos_65052241_l-2015-pic905-895x505-35231.jpg'
        },
        {id: 'Wolf', ava: 'https://cs13.pikabu.ru/post_img/big/2019/02/03/4/1549167685160735519.jpg'}

    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'You'},
        {id: 3, message: 'Yes'},
        {id: 4, message: 'Ks'},
        {id: 5, message: 'Dem'}
    ],

    newMessageBody: ''

}


const dataReducer = (state= initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case  SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messagesData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }

}
export const sendMessageCreator = () => ({
    type: SEND_MESSAGE

})
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})
export default dataReducer;