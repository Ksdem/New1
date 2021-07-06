import React from "react";
import f from './Dialogs.module.css'
import DialogsItems from "./DialogsItems/DialogsItems"
import Messages from "./Messages/Messages";
import {Redirect} from 'react-router-dom';

const Dialogs = (props) => {
    let state = props.data;


    let AnimalsElements = state.animalsData
        .map((m, i) => <DialogsItems key={i} id={m.id} ava={m.ava}/>);

    let MessagesElements = state.messagesData
        .map((m, i) =>
            <Messages key={i} message={m.message}/>);
    let newMessageBody = state.newMessageBody;


    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    let onSendMessageClick = () => {
        props.sendMessageClick();
    }
    let onUsers = () => {
        ;
    }

   if(!props.isAuth) return <Redirect to={'/login'}/>;



    return (
        <div className={f.dialogsContainer}>
            <div className={f.dialogs}>
                {AnimalsElements}


            </div>
            <div className={f.messages}>
                {MessagesElements}
            </div>
            <div className={`${f.newFlex} ${f.messages}`}>
                <div>
                    <textarea onChange={onNewMessageChange}
                              value={newMessageBody}/>
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Send</button>
                    <button onClick={onUsers}>go</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;