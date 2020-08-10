import React from "react";
import f from './MyPosts.module.css'
import Post from "./Post/Post";
import DialogsItems from "../../Dialogs/DialogsItems/DialogsItems";

const MyPosts = () => {
    let posts = [
        {message: 'Hi', likesCount: '1'},
        {message: 'Hello', likesCount: '5'}
    ]

    let postElements = posts
        .map((m,i) => <Post key={i} message={m.message} likesCount={m.likesCount}/>);


    return (

        <div className={f.post}>
            My posts
            <div><textarea></textarea></div>
            <div>
                <button>New post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    );
}
export default MyPosts;