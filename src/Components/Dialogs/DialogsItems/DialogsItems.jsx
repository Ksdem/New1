import React from "react";
import f from './DialogsItems.module.css';
import {NavLink} from "react-router-dom";

const DialogsItems = (props) => {
    return (

        <div className={f.dialogsItems}>
            <div className={f.item}>

                <img src={props.ava} alt={'asd'} />
                {/*{props.ava}*/}

                <NavLink strict to={`/messages/${props.id}`}>
                    {props.id}
                </NavLink>
            </div>
        </div>
    );


}
export default DialogsItems;