import React from "react";
import f from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Content = () => {
    return (
        <div className={f.content}>
            <div>
                <img src='https://internationalwealth.info/wp-content/uploads/2019/03/Seychel-bank.jpg'/>
            </div>
            <div className={`${f.post} ${f.active}`}>
                ava+description
            </div>
            <MyPosts/>
            <div/>
        </div>
    );
}
export default Content;