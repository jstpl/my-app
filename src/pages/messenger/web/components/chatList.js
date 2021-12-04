import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatListView from "../views/chatList";
import container from "../../../../app/config/container";
import breadcrumbFacade from "../../../../packages/breadcrumb/domain/facades/breadcrumbFacade";

class ChatList extends Component {

    componentDidMount() {
        breadcrumbFacade.addHome();
        breadcrumbFacade.add('Messenger', '/messenger');
        //const { chat } = container.messenger.services;
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
