import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from "./Profile_info/Profile_info";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;

