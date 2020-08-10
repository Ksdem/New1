import React from "react";
import f from './ButtonForFriends.module.css'
import {NavLink} from "react-router-dom";

const ButtonForFriends = (props) => {
    return (

        <div>
            <button className={`${f.button} ${f.button_hover}`}>
                <NavLink className={f.button} activeClassName={f.activeLink} to={props.to ? props.to : ''}>
                {props.name}
            </NavLink>
            </button>
        </div>

    );

}
export default ButtonForFriends;