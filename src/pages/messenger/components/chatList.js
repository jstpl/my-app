import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatListView from "../views/chatList";
import {chatService} from "../index";

class ChatList extends Component {

    componentDidMount() {
        chatService.all(this.state).catch(function () {});
    }

    render() {
        return (
            <>
                <ChatListView dataProvider={this.props.dataProvider} />
            </>
        );
    }
}

const mapStateToProps = (store) => store.chatState;
export default connect(mapStateToProps)(ChatList);
