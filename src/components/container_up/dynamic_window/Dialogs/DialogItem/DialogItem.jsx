import React from "react";
import classes from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id} className={classes.dialog} activeClassName={classes.active_link}>
            <img src={props.images} alt="profile"/>{props.name}
        </NavLink>
    )
}

export default DialogItem;