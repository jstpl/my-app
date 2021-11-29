import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userApi from "../api/userApi";
import ChatListView from "../views/list";
import {chatService} from "../index";

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collection: [],
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
        let dataProvider = await chatService.all(this.state);
        state.dataProvider = dataProvider;
        state.collection = dataProvider.collection;
        this.setState(state);
    }

    deleteUser(user) {
        userApi.deleteUser(user)
    }

    render() {
        // console.log(this.state.dataProvider);
        return (
            <ChatListView dataProvider={this.state.dataProvider} />
        );
    }
}

const mapStateToProps = function (store) {
    return {
        users: store.userState.users
    };
};

export default connect(mapStateToProps)(List);
