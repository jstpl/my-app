import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatListView from "../views/chatList";
import {chatService} from "../index";

class ChatList extends Component {

    componentDidMount() {
        chatService.all(this.state);
    }

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
