import React from "react";
import f from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile)
        return <Preloader/>


    return (
        <div>
            <div>
                <img src='https://internationalwealth.info/wp-content/uploads/2019/03/Seychel-bank.jpg'/>
            </div>
            <div className={f.post}>
                <img src={props.profile.photos.large}/>
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