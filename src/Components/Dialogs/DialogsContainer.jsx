import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/data-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


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
let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);


export default DialogsContainer;