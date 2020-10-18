import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userApi from "../api/user-api";
import UserListView from "../views/list";

class List extends Component {

    componentDidMount() {
        userApi.getUsers();
    }

    render() {
        return (
            <UserListView users={this.props.users} deleteUser={userApi.deleteUser}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        users: store.userState.users
    };
};

export default connect(mapStateToProps)(List);
