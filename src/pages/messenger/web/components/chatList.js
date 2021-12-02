import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatListView from "../views/chatList";
import container from "../../../../app/config/container";

class ChatList extends Component {

    componentDidMount() {
        container.messenger.services.chat.all(this.state).catch(function () {
        });
    }

    render() {
        return (
            <ChatListView dataProvider={this.props.dataProvider}/>
        );
    }
}

const mapStateToProps = (store) => store.messengerChat;
export default connect(mapStateToProps)(ChatList);
