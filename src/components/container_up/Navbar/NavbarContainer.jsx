import React from 'react';
import Navbar from "./Navbar";
import StoreContext from "../../../StoreContext";

const NavbarContainer = (props) => {



    return  (

        <StoreContext>
            {
                (store) => {
                    let state = store.getState();
                    return <Navbar dialogs={state.dialogsPage.dialogs}/>
                }
            }
        </StoreContext>

    )


}

export default NavbarContainer;