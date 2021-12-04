import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatListView from "../views/chatList";
import container from "../../../../app/config/container";
import breadcrumbFacade from "../../../../packages/breadcrumb/domain/facades/breadcrumbFacade";

class ChatList extends Component {

    componentDidMount() {
        // breadcrumbFacade.add('Messenger', '/messenger');
        container.messenger.services.chat.all(this.state).catch(function () {
        });
    }

    componentDidUpdate() {
        // breadcrumbFacade.add('Messenger', '/messenger');
    }

    render() {
        return (
            <ChatListView dataProvider={this.props.dataProvider}/>
        );
    }
}

const mapStateToProps = (store) => store.messengerChat;
export default connect(mapStateToProps)(ChatList);
