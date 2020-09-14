import React from "react";
import f from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = (props) => {


    let postElements = props.posts.map((m, i) =>
        <Post key={i} message={m.message} likesCount={m.likesCount}/>)


    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    }
    let onPostChange = () => {

        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                <button onClick={onAddPost}>New post</button>
            </div>
            <div>
                {postElements}

            </div>
        </div>
    );
}
export default MyPosts;