import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return  (
        <div className={classes.content}>
            <div>
                <img src='https://img1.goodfon.com/original/3000x2208/7/48/art-tsujiki-lyudi-nebo-zvezdy.jpg' alt=''/>
            </div>
            <div>avatar disc</div>
            My Posts
            <MyPosts/>
        </div>
    )
}

export default Profile;