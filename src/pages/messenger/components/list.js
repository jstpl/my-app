import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userApi from "../api/userApi";
import UserListView from "../views/list";
import {chatService} from "../index";

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collection: [],
        };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        let state = {};
        let dataProvider = await chatService.all(this.state);
        state.collection = dataProvider.body;
        this.setState(state);
        //console.log(chatDP);
        //userApi.getUsers();
    }

    deleteUser(user) {
        userApi.deleteUser(user)
    }

    render() {
        console.log(this.state.collection);
        return (
            <UserListView users={this.state.collection} deleteUser={this.deleteUser}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        users: store.userState.users
    };
};

export default connect(mapStateToProps)(List);
