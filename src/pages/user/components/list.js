import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as userApi from "../api/user-api";
import UserListView from "../views/list";
import store from "../../../app/store";
import {loadSearchLayout} from "../../../teach/actions/search-layout-actions";

let users = [
    {
        id: 2,
        name: 'Michael',
    },
    {
        id: 1,
        name: 'Ryan',
    },
    {
        id: 3,
        name: 'Dan',
    },
    {
        id: 4,
        name: 'Matt',
    },
    {
        id: 5,
        name: 'Tobias',
    },
    {
        id: 6,
        name: 'Sebastian',
    },
];

class List extends Component {

    componentDidMount() {
        userApi.getUsers();
        //store.dispatch(loadSearchLayout('users', 'User Results'));
    }

    render() {
        //console.log(this.props.users);
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

