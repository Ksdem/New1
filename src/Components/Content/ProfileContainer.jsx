import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {getUsersProfile} from "../../Redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);




let mapStateToProps = (state) => ({
    profile: state.profile

});


let withUrlDataContainerComponent = withRouter(AuthRedirectComponent)


export default connect(mapStateToProps, {getUsersProfile})(withUrlDataContainerComponent);