import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatListView from "../views/chat-list";
import {chatService} from "../index";
import DataProvider from "../../../packages/domain/DataProvider";
// import chatReducer from '../reducers/chatReducer';

class ChatList extends Component {

    componentDidMount() {
        chatService.all(this.state);
    }

    /*deleteUser(user) {
        userApi.deleteUser(user)
    }*/

    render() {
        return (
            <ChatListView dataProvider={this.props.dataProvider} />
        );
    }
}

const mapStateToProps = function (store) {
    return {
        dataProvider: store.chatState.dataProvider
    };
};

export default connect(mapStateToProps)(ChatList);
