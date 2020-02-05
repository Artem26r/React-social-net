import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";


let postsData = [
    {id: 1, message: 'Test text #1', likeCount: 21},
    {id: 2, message: 'Test text #2', likeCount: 34},
    {id: 3, message: 'Test text #3', likeCount: 22},
    {id: 4, message: 'Test text #4', likeCount: 41},
    {id: 5, message: 'Test text #5', likeCount: 12},
    {id: 6, message: 'Test text #6', likeCount: 23},
    {id: 7, message: 'Test text #7', likeCount: 1},
    {id: 8, message: 'Test text #8', likeCount: 42},
    {id: 9, message: 'Test text #9', likeCount: 23},
    {id: 10, message: 'Test text #10', likeCount: 12},
]

let postsElements = postsData.map( post => <Post message={post.message} likeCount={post.likeCount}/>)

const MyPosts = () => {
    return (
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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;