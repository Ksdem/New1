import React from "react";
import f from './MyPosts.module.css'
import Post from "./Post/Post";
import DialogsItems from "../../Dialogs/DialogsItems/DialogsItems";

const MyPosts = (props) => {


    let postElements = props.posts.map((m, i) => <Post key={i} message={m.message} likesCount={m.likesCount}/>)



    let newPostElement=React.createRef();

    let addPost = () => {
            let text=newPostElement.current.value;
          props.addPost(text);
          newPostElement.current.valueOf='';

    }

    return (

        <div className={f.post}>
            My posts
            <div>
                <textarea ref={newPostElement}></textarea>
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