import React from "react";
import f from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import {updateStatus} from "../../../../Redux/profile-reducer";

const ProfileInfo = (props) => {
    if (!props.profile || !props.profile.photos)
        return <Preloader/>

    return (
        <div>
            <div>
                <img src='https://internationalwealth.info/wp-content/uploads/2019/03/Seychel-bank.jpg'/>
            </div>
            <div className={f.post}>
                <img src={props.profile.photos.large}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>
                    {props.profile.contacts.vk}
                </div>
                <div>
                    {props.profile.contacts.twitter}
                </div>
            </div>
        </div>
    );
}
export default ProfileInfo;