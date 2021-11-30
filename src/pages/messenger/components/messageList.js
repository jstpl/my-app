import React, {Component} from 'react';
import MessageListView from '../views/messageList'
import {connect} from "react-redux";
import {messageService} from "../index";
import Query from "../../../packages/domain/libs/Query";

class MessageList extends Component {

    updateList(chatId) {
        if(chatId) {
            let query = new Query();
            query.filter.chatId = chatId;
            messageService.all(query).then(function () {});
        }
    }

    componentDidMount() {
        let chatId = this.props.match.params.chatId;
        this.updateList(chatId);
    }

    componentDidUpdate(prevProps) {
        let chatId = this.props.match.params.chatId;
        let prevChatId = prevProps.match.params.chatId;
        // Обычное использование (не забудьте сравнить свойства):
        if (chatId !== prevChatId) {
            this.updateList(chatId);
            // console.log(prevChatId, chatId);
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
