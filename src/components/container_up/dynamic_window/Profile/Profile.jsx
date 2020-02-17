import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./Profile_info/Profile_info";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;

