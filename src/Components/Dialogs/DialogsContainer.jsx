import React from "react";
import {sendMessageCreator} from "../../Redux/data-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        data: state.data

    }


}
const mapDispatchToProps = (dispatch) => {
    return {
        sendMessageClick: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }

    }


}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);