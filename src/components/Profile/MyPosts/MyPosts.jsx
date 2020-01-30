import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return  (
        <div>
            <textarea></textarea>
            <button>Add Post</button>

            <div className={classes.posts}>
                <Post message='Hi broo Dzheky'/>
                <Post message='it`s my first post'/>
            </div>
        </div>
    )
}

export default MyPosts;