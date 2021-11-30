import React, {Component} from 'react';
import MessageListView from '../views/messageList'
import {connect} from "react-redux";
import {messageService} from "../index";
import Query from "../../../packages/domain/libs/Query";

class MessageList extends Component {

    update() {
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
        this.update();
        return (
            <>
                aaa
                {this.props.match.params.id}
            </>
            // <MessageListView user={this.props.profile}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        profile: store.userState.userProfile
    };
};

export default connect(mapStateToProps)(MessageList);
