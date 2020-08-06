import React from "react";
import f from './NavBar.module.css';
import Button from "./ButtonForFriends/ButtonForFriends";

const NavBar = () => {
    return (
        <nav className={f.nav}>
            <div className={`${f.item} ${f.active}`}>
                <div><a href='/profile'>Profile</a></div>
                <div>
                    <a href='/messages' >Messages</a>
                </div>
                <div>
                    <a href='/news'>News</a>
                </div>
                <div>
                    <a href='/music'>Music</a>
                </div>
                <div>
                    <a href='/settings'>Settings</a>
                </div>
                <div className={f.gridContainer}>
                    <Button name='Hare' className={f.one}/>
                    <Button name='Cat'className={f.two}/>
                    <Button name='Fox'className={f.three}/>
                </div>
            </div>
        </nav>

    );

}
export default NavBar;