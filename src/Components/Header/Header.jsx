import React from "react";
import f from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={f.header}>
            <img src='https://cdn2.f-cdn.com/contestentries/991677/21958841/58e4d6ccf1d93_thumb900.jpg'/>
        <div className={f.loginBlock}>
            {props.isAuth? props.login:
            <NavLink to={'/login'}>
                Login
            </NavLink>}

        </div>


        </header>

    );
}
export default Header;