import React from "react";
import f from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ContentInfo from "./MyPosts/ContentInfo/ContentInfo";


const Content = (props) => {
    return (
        <div>
            <ContentInfo/>
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>

        </div>
    );
}
export default Content;