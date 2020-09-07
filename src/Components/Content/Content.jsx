import React from "react";
import f from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ContentInfo from "./MyPosts/ContentInfo/ContentInfo";


const Content = (props) => {
    debugger
    return (
        <div>
            <ContentInfo/>
            <MyPosts posts={props.profile.posts}
                     newPostText={props.profile.newPostText}
                     dispatch={props. dispatch}/>

        </div>
    );
}
export default Content;