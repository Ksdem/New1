import React from "react";
import f from './Messages.module.css';
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
        <div>
            <div className={f.item}>

                {props.message}
            </div>
        </div>
    );

}
export default Messages;