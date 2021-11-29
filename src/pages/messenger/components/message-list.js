import React, {Component} from 'react';
import MessageListView from '../views/message-list'
// import * as userApi from "../api/userApi";
import {connect} from "react-redux";

class MessageList extends Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
       // userApi.getProfile(userId)
    }

    render() {
        return (
            <MessageListView user={this.props.profile}/>
        );
    }
}

// export default Profile;

const mapStateToProps = function (store) {
    return {
        profile: store.userState.userProfile
    };
};

export default connect(mapStateToProps)(MessageList);
