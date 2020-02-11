import React from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

    let messageElements = props.state.messages.map( (message, id) => <Message key={id} message={message.message}/>)
    let dialogsElements = props.state.dialogs.map( (dialog, id) => <DialogItem key={id} name={dialog.name} id={dialog.id} images={dialog.images}/>)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
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
                    <textarea ref={newMessageElement}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>send</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;