import React from "react";
import f from './Dialogs.module.css'
import DialogsItems from "./DialogsItems/DialogsItems"
import Messages from "./Messages/Messages";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/data-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {

    return <StoreContext.Consumer>
        {store => {
            let state = store.getState().data;


            let onNewMessageChange = (body) => {
                store.dispatch(updateNewMessageBodyCreator(body));
            }

            let onSendMessageClick = () => {
               store.dispatch(sendMessageCreator());
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessageClick={onSendMessageClick}
                            data={state}/>
        }
    }
    </StoreContext.Consumer>

}
export default DialogsContainer;