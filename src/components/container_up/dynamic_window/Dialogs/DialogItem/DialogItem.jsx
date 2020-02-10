import React from "react";
import classes from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active_link}><img src={props.imgo}/></NavLink>
            <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active_link}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;