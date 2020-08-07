import React from "react";
import f from './Messages.module.css';
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
        <div className={f.messages}>
            <div>

                {props.messag}
            </div>
        </div>
    );


}
export default Messages;