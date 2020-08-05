import React from "react";
import f from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={f.post}>
            My posts
            <div><textarea></textarea></div>
            <div>
                <button>New post</button>
            </div>
            <div>
                <Post  message='Hi' likeCount='1'/>
                <Post  message='Hello' likeCount='5'/>
            </div>
        </div>
    );
}
export default MyPosts;