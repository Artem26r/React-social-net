import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

    return  (
        <div className={classes.item}>
            <img src='https://www.sunhome.ru/i/wallpapers/183/malenkii-svidetel.orig.jpg' alt=''/>
            { props.message }
            <div>
                <span>Like {props.likeCount} </span>
            </div>
        </div>
    )
}

export default Post;