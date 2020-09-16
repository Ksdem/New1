import React from "react";
import f from './Content.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ContentInfo from "./MyPosts/ContentInfo/ContentInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Content = (props) => {
    return (
        <div>
            <ContentInfo/>
            <MyPostsContainer/>

        </div>
    );
}
export default Content;