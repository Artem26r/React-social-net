import React from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={classes.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={classes.active_link}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Артем'},
        {id: 2, name: 'Кристина'},
        {id: 3, name: 'Женя'},
        {id: 4, name: 'Оля'},
        {id: 5, name: 'Транд'},
        {id: 6, name: 'Уил'}
    ]

    let messages = [
        {id: 1, message: 'Сообщение №1'},
        {id: 2, message: 'Сообщение №2'},
        {id: 3, message: 'Сообщение №3'},
        {id: 4, message: 'Сообщение №4'},
        {id: 5, message: 'Сообщение №5'},
        {id: 6, message: 'Сообщение №6'}
    ]

    let messageElements = messages.map( message => <Message message={message.message}/>)
    let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>)


    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;