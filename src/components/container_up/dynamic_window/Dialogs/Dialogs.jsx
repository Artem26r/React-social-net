import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {CustomInput, CustomButton} from "../../../components_element/componentsElement";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../../State/state";




const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let messageElements = state.messages.map((message, id) => <Message key={id} message={message.message}/>)
    let dialogsElements = state.dialogs.map((dialog, id) => <DialogItem key={id} name={dialog.name} id={dialog.id}
                                                                              images={dialog.images}/>)

    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div>
                <div className={classes.messages}>
                    {messageElements}
                </div>
                <div>
                    <CustomInput value={newMessageBody}
                                 placeholder='Message'
                                 onChange={onNewMessageChange}/>
                </div>
                <div>
                    <CustomButton onClick={onSendMessageClick}>Send</CustomButton>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;