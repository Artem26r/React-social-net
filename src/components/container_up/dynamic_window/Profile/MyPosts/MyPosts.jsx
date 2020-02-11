import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {

    let postsElements = props.posts.map( (post, id) => <Post key={id} message={post.message} likeCount={post.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    return (
        <div className={classes.mypost}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;