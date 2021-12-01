import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatListView from "../views/chatList";
import messengerDomain from "../../domain";

class ChatList extends Component {

    componentDidMount() {
        messengerDomain.services.chat.all(this.state).catch(function () {});
    }

    render() {
        return (
            <ChatListView dataProvider={this.props.dataProvider} />
        );
    }
}

const mapStateToProps = (store) => store.messengerChat;
export default connect(mapStateToProps)(ChatList);
