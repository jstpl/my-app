import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userApi from "../api/userApi";
import UserListView from "../views/list";
import {chatService} from "../index";

class List extends Component {

    async componentDidMount() {
        await chatService.all(this.state);
        userApi.getUsers();
    }

    deleteUser(user) {
        userApi.deleteUser(user)
    }

    render() {
        return (
            <UserListView users={this.props.users} deleteUser={this.deleteUser}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        users: store.userState.users
    };
};

export default connect(mapStateToProps)(List);
