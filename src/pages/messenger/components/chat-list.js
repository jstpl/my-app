import React, {Component} from 'react';
import {connect} from 'react-redux';
import ChatListView from "../views/chat-list";
import {chatService} from "../index";

class ChatList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataProvider: {
                collection: [],
                paginator: {},
            },
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        let state = {};
        state.dataProvider = await chatService.all(this.state);
        this.setState(state);
    }

    /*deleteUser(user) {
        userApi.deleteUser(user)
    }*/

    render() {
        // console.log(this.state.dataProvider);
        return (
            <ChatListView dataProvider={this.state.dataProvider} />
        );
    }
}

export default ChatList;

/*const mapStateToProps = function (store) {
    return {
        users: store.userState.users
    };
};

export default connect(mapStateToProps)(List);*/
