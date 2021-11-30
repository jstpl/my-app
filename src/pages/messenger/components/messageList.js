import React, {Component} from 'react';
import MessageListView from '../views/messageList'
import {connect} from "react-redux";

class MessageList extends Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
       // userApi.getProfile(userId)
    }

    render() {
        return (
            <>
                aaa
                {this.props.match.params.id}
            </>
            // <MessageListView user={this.props.profile}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        profile: store.userState.userProfile
    };
};

export default connect(mapStateToProps)(MessageList);
