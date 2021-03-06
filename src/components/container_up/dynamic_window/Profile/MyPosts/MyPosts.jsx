import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {CustomButton, CustomInput} from "../../../../components_element/componentsElement";



const MyPosts = (props) => {

    let postsElements = props.posts.map( (post, id) => <Post key={id} message={post.message} likeCount={post.likeCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={classes.mypost}>
            <h3>My Post</h3>
            <div>
                <div>
                    <CustomInput onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <CustomButton onClick={onAddPost}>Add post</CustomButton>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;