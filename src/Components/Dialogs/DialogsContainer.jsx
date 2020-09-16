import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/data-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        data: state.data
    }


}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessageClick: () => {
            dispatch(sendMessageCreator());
        }

    }


}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;