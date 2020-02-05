import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profile_info from "./Profile_info/Profile_info";

const Profile = () => {
    return (
        <div className={classes.content}>
            <Profile_info/>
            <MyPosts/>
        </div>
    )
}

export default Profile;

