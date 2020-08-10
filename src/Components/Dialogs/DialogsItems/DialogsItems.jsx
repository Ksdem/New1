import React from "react";
import f from './DialogsItems.module.css';
import {NavLink} from "react-router-dom";

const DialogsItems = (props) => {
    return (
            <div className={f.item}>



                <NavLink className={f.item} activeClassName={f.activeLink} strict to={`/messages/${props.id}`} >
                    <img src={props.ava} alt={'asd'} />
                    {props.id}
                </NavLink>
            </div>
    );


}
export default DialogsItems;