import React from 'react';
import style from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileImage from "./ProfileImage/ProfileImage";
import Description from "./Description/Description";
import NewPost from "./NewPost/NewPost";

const Profile= ()=> {
    return (
        <div className={style.profile}>
            <ProfileImage/>
            <Description/>
            <NewPost/>
            <MyPosts/>
        </div>
    );
}

export default Profile;
