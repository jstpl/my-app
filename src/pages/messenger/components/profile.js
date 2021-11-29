import React, {Component} from 'react';
import UserProfileView from '../views/profile'
// import * as userApi from "../api/userApi";
import {connect} from "react-redux";

class Profile extends Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
       // userApi.getProfile(userId)
    }

    render() {
        return (
            <UserProfileView user={this.props.profile}/>
        );
    }
}

// export default Profile;

const mapStateToProps = function (store) {
    return {
        profile: store.userState.userProfile
    };
};

export default connect(mapStateToProps)(Profile);
