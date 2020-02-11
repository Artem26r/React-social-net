import React from "react";
import classes from "./friends.module.css"

const Friends = (props) => {

    return (
        <img className={classes.friends} src={props.images} alt="profile"/>
    )
}

export default Friends;