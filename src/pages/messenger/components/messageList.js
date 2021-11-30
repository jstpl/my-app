import React, {Component} from 'react';
import MessageListView from '../views/messageList'
import {connect} from "react-redux";
import {messageService} from "../index";
import Query from "../../../packages/domain/libs/Query";

class MessageList extends Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
        if(userId) {
            let query = new Query();
            query.filter.chatId = userId;
            messageService.all(query).then(function () {});
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
