import React from "react";
import f from './NavBar.module.css';
import Button from "./ButtonForFriends/ButtonForFriends";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={f.nav}>
            <div className={f.item}>
                <div>
                    <NavLink className={f.item} to='/profile' activeClassName={f.activeLink}>Profile</NavLink>
                </div>
                <div>
                    <NavLink className={f.item} to='/messages' activeClassName={f.activeLink}>Messages</NavLink>
                </div>
                <div>
                    <NavLink className={f.item} to='/news' activeClassName={f.activeLink}>News</NavLink>
                </div>
                <div>
                    <NavLink className={f.item} to='/music' activeClassName={f.activeLink}>Music</NavLink>
                </div>
                <div>
                    <NavLink className={f.item} to='/settings' activeClassName={f.activeLink}>Settings</NavLink>
                </div>
                <div className={f.gridContainer}>
                    <Button name='Hare' className={f.one}/>
                    <Button name='Cat' className={f.two}/>
                    <Button name='Fox' className={f.three}/>
                </div>
            </div>
        </nav>

    );

}
export default NavBar;