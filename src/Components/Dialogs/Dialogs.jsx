import React from "react";
import f from './Dialogs.module.css'
import DialogsItems from "./DialogsItems/DialogsItems"
import Messages from "./Messages/Messages";
import {Field, reduxForm} from "redux-form";

const Dialogs = (props) => {
    let state = props.data;


    let AnimalsElements = state.animalsData
        .map((m, i) => <DialogsItems key={i} id={m.id} ava={m.ava}/>);

    let MessagesElements = state.messagesData
        .map((m, i) =>
            <Messages key={i} message={m.message}/>);


    let addNewMessage = (values) => {
        props.sendMessageClick(values.newMessageBody);
    }
    return (
        <div className={f.dialogsContainer}>
            <div className={f.dialogs}>
                {AnimalsElements}


            </div>
            <div className={f.messages}>
                {MessagesElements}
            </div>
            <div className={`${f.newFlex} ${f.messages}`}>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='newMessageBody' placeholder='Enter your message'/>

            </div>
            <div>
                <button>Send</button>
                <button>go</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;