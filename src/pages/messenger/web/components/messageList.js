import React, {Component} from 'react';
import MessageListView from '../views/messageList'
import {connect} from "react-redux";
import Query from "../../../../packages/domain/libs/Query";
import container from "../../../../app/config/container";

class MessageList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            password: '',
            errors: {},
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        let name = event.target.name;
        let state = {};
        state[name] = event.target.value;
        this.setState(state);
    }

    updateList() {
        let chatId = this.props.match.params.chatId;
        let query = new Query();
        query.filter.chatId = chatId;
        container.messenger.services.message.all(query).catch(function () {
        });
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

const mapStateToProps = (store) => store.messengerMessage;
export default connect(mapStateToProps)(MessageList);
