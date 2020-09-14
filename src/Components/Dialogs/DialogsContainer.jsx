import React from "react";
import f from './Dialogs.module.css'
import DialogsItems from "./DialogsItems/DialogsItems"
import Messages from "./Messages/Messages";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/data-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().data;


    let onNewMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
                 sendMessageClick={onSendMessageClick}
                 data={state}

        />
    );
}
export default DialogsContainer;