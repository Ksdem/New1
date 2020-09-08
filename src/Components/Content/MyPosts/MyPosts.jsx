import React from "react";
import f from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";





const MyPosts = (props) => {


    let postElements = props.posts.map((m, i) =>
        <Post key={i} message={m.message} likesCount={m.likesCount}/>)


    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }
    let onPostChange = () => {

        let text = newPostElement.current.value;
        let action =updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }
    return (

        <div className={f.post}>
            My posts
            <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>New post</button>
            </div>
            <div>
                {postElements}

            </div>
        </div>
    );
}
export default MyPosts;