import React from "react";
import f from './Dialogs.module.css'
import DialogsItems from "./DialogsItems/DialogsItems"
import Messages from "./Messages/Messages";
import Post from "../Content/MyPosts/Post/Post";

const Dialogs = (props) => {

    let newMessage = React.createRef();

    let addMessage = () => {
        let text = newMessage.current.value;
        alert('go message')

    }
    let AnimalsElements = props.state.animalsData
        .map((m, i) => <DialogsItems key={i} id={m.id} ava={m.ava}/>);

    let MessagesElements = props.state.messagesData
        .map((m, i) => <Messages key={i} message={m.message}/>);


    return (
        <div className={f.dialogsContainer}>
            <div className={f.dialogs}>
                {AnimalsElements}


            </div>
            <div className={f.messages}>
                {MessagesElements}
            </div>
            <div className={`${f.newFlex} ${f.messages}`}>
                <div >
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>New message</button>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;