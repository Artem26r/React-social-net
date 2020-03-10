import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {CustomButton, CustomInput} from "../../../../components_element/componentsElement";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../../State/state";



const MyPosts = (props) => {

    let postsElements = props.posts.map( (post, id) => <Post key={id} message={post.message} likeCount={post.likeCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        //let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={classes.mypost}>
            <h3>My Post</h3>
            <div>
                <div>
                    <CustomInput onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <CustomButton onClick={addPost}>Add post</CustomButton>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;