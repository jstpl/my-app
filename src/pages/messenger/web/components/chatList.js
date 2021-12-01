import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatListView from "../views/chatList";
import domain from "../../../../app/config/domain";

class ChatList extends Component {

    componentDidMount() {
        domain.messenger.services.chat.all(this.state).catch(function () {
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
