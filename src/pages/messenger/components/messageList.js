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
        let chatId = prevProps.match.params.chatId;
        let prevChatId = this.props.match.params.chatId;
        // Обычное использование (не забудьте сравнить свойства):
        if (chatId !== prevChatId) {
            this.updateList(chatId);
            console.log(prevChatId, chatId);
        }

        // console.log(this.props.match.params.chatId);
    }

    /*componentDidUpdate111(nextProps, nextState) {
        let prevChatId = this.props.match.params.chatId;
        let chatId = nextProps.match.params.chatId;
        console.log(prevChatId, chatId);
        if(prevChatId === chatId) {
            return false;
        }
        this.updateList(chatId);
        return true;
    }*/

    componentWillUnmount() {
       // console.log('componentWillUnmount');
    }

    render() {
        let chatId = this.props.match.params.chatId;
        //console.log(chatId);
        return (
            <MessageListView dataProvider={this.props.dataProvider}/>
        );
    }
}

const mapStateToProps = (store) => store.messageState;
export default connect(mapStateToProps)(MessageList);
