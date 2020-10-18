import React, {Component} from 'react';
import UserProfileView from '../views/profile'
import * as userApi from "../api/user-api";
import {connect} from "react-redux";

class Profile extends Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
        userApi.getProfile(userId)
    }

    render() {
        // console.log(this.props.profile);
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
