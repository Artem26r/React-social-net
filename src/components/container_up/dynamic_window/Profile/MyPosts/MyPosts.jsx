import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";



let postsData = [
    {id: 1, message: 'Hi broo Dzheky', likeCount: 21},
    {id: 2, message: 'it`s my first post', likeCount: 34}
]

const MyPosts = () => {
    return  (
        <div className={classes.mypost}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postsData[0].message} likeCount={postsData[0].likeCount}/>
                <Post message={postsData[1].message} likeCount={postsData[1].likeCount}/>
            </div>
        </div>
    )
}

export default MyPosts;