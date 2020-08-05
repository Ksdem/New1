import React from "react";
import f from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={f.nav}>
            <div className={`${f.item} ${f.active}`}>
                <div><a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
            <div className={f.friends}>
                <a href=''>
                    Anfisa
                </a>
                <a href=''>
                    Cat
                </a>
                <a href=''>
                    Fox
                </a>
            </div>
            </div>
        </nav>

    );

}
export default NavBar;