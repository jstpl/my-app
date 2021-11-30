import React, {Component} from 'react';
import MessageListView from '../views/messageList'
import {connect} from "react-redux";
import {messageService} from "../index";
import Query from "../../../packages/domain/libs/Query";

class MessageList extends Component {

    updateList() {
        let chatId = this.props.match.params.chatId;
        let query = new Query();
        query.filter.chatId = chatId;
        messageService.all(query).then(function () {});
    }

    componentDidMount() {
        this.updateList();
    }

    componentDidUpdate(prevProps) {
        let chatId = this.props.match.params.chatId;
        let prevChatId = prevProps.match.params.chatId;
        // Обычное использование (не забудьте сравнить свойства):
        if (chatId !== prevChatId) {
            this.updateList();
        }
    }

    render() {
        return (
            <MessageListView dataProvider={this.props.dataProvider}/>
        );
    }
}

const mapStateToProps = (store) => store.messageState;
export default connect(mapStateToProps)(MessageList);
