import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userApi from "../api/userApi";
import UserListView from "../views/list";

class List extends Component {

    componentDidMount() {
        userApi.getUsers();
    }

    deleteUser(id) {
        userApi.deleteUser(id)
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
