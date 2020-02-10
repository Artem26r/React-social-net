import React from "react";
import classes from "./friends.module.css"
import Message from "../../dynamic_window/Dialogs/Message/Message";
import DialogItem from "../../dynamic_window/Dialogs/DialogItem/DialogItem";

const Friends = (props) => {

    return (
        <img className={classes.friends} src={props.imgo}/>
    )
}

export default Friends;