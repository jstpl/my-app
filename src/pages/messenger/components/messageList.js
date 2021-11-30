import React, {Component} from 'react';
import MessageListView from '../views/messageList'
import {connect} from "react-redux";
import {messageService} from "../index";
import Query from "../../../packages/domain/libs/Query";

class MessageList extends Component {

    componentDidMount() {
        let userId = this.props.match.params.id;
        console.log(userId);
        if(userId) {
            let query = new Query();
            query.filter.chatId = userId;
            // console.log(userId);
            messageService.all(query).then(function () {});
        }
    }

    render() {
        // this.update();
        return (
            /*<>
                aaa
                {this.props.match.params.id}
            </>*/
            <MessageListView dataProvider={this.props.dataProvider}/>
        );
    }
}

const mapStateToProps = (store) => store.messageState;
export default connect(mapStateToProps)(MessageList);
