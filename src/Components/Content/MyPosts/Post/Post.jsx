import React from "react";
import f from './Post.module.css'


const Post = (props) => {


    return (
        <div className={f.item}>
            <img
                src='https://lh3.googleusercontent.com/proxy/GJ_e8hcFe60VFWz4Eg1XiPVUOomU8ZQFtBkyt1eWnKkEOJCTE5wj88NMFH7b780Tck5tENjYvzOVkupT58w'/>
            <div>
                {props.message}

            </div>
            <span>  {props.likeCount}</span>
        </div>
    );
}
export default Post;