import React from "react";
import f from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";


const MyPosts = (props) => {


    let postElements = props.posts.map((m, i) =>
        <Post key={i} message={m.message} likesCount={m.likesCount}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);

    }
    return (

        <div className={f.post}>
            My posts
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div>
                {postElements}

            </div>
        </div>
    );
}
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText' component='textarea'/>
            </div>
            <div>
                <button>New post</button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm)

export default MyPosts;