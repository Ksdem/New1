import React from "react";
import ContentInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {
    return (
        <div>
            <ContentInfo profile={props.profile}
            status={props.status} updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>

        </div>
    );
}
export default Profile;