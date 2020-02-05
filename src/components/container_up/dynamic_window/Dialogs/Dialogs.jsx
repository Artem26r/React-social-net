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

    let dialogsData = [
        {id: 1, name: 'Артем'},
        {id: 2, name: 'Кристина'},
        {id: 3, name: 'Женя'},
        {id: 4, name: 'Оля'},
        {id: 5, name: 'Транд'},
        {id: 6, name: 'Уил'}
    ]

    let messageData = [
        {id: 1, message: 'Сообщение №1'},
        {id: 2, message: 'Сообщение №2'},
        {id: 3, message: 'Сообщение №3'},
        {id: 4, message: 'Сообщение №4'},
        {id: 5, message: 'Сообщение №5'},
        {id: 6, message: 'Сообщение №6'}
    ]


    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>

                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>


            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
                <Message message={messageData[5].message}/>

            </div>
        </div>
    )
}

export default Dialogs;