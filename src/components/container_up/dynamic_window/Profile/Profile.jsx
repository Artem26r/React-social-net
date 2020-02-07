import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profile_info from "./Profile_info/Profile_info";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <Profile_info/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile;

