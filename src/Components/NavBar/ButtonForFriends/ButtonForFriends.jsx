import React from "react";
import f from './ButtonForFriends.module.css'

const ButtonForFriends = (props) => {
    return (

        <div>
            <button className={`${f.button} ${f.button_hover}`}><a href={props.href ? props.href : ''}>
                {props.name}
            </a></button>
        </div>

    );

}
export default ButtonForFriends;