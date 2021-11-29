import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatListView from "../views/chat-list";
import {chatService} from "../index";
import DataProvider from "../../../packages/domain/DataProvider";
// import chatReducer from '../reducers/chatReducer';

class ChatList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataProvider: new DataProvider(),
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        chatService.all(this.state);
    }

    /*deleteUser(user) {
        userApi.deleteUser(user)
    }*/

    render() {
        // console.log(this.state.dataProvider);
        return (
            <ChatListView dataProvider={this.props.dataProvider} />
        );
    }
}

// export default ChatList;

const mapStateToProps = function (store) {
    return {
        dataProvider: store.chatState.dataProvider
    };
};

export default connect(mapStateToProps)(ChatList);
