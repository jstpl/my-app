import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserList from '../views/user-list';
import * as userApi from '../../pages/user/api/user-api';
import store from '../../app/store';
import {loadSearchLayout} from '../../actions/search-layout-actions';

class UserListContainer extends Component {

    componentDidMount() {
        userApi.getUsers();
        store.dispatch(loadSearchLayout('users', 'User Results'));
    }

    render() {
        return (
            <UserList users={this.props.users} deleteUser={userApi.deleteUser}/>
        );
    }

}

const mapStateToProps = function (store) {
    return {
        users: store.userState.users
    };
};

export default connect(mapStateToProps)(UserListContainer);
