import React from "react";
import f from './ButtonForFriends.module.css'
import {NavLink} from "react-router-dom";

const ButtonForFriends = (props) => {
    return (

        <div>
            <button className={`${f.button} ${f.button_hover}`}>
                <NavLink to={props.href ? props.href : ''}>
                {props.name}
            </NavLink>
            </button>
        </div>

    );

}
export default ButtonForFriends;