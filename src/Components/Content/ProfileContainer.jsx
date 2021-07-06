import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getUsersProfile} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUsersProfile(userId)


    }

    render() {


        return (

            <Profile {...this.props} profile{...this.props.profile}/>

        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile

});


export default compose(
    connect(mapStateToProps, {getUsersProfile}),
    withRouter,
    withAuthRedirect

)(ProfileContainer);


