import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as authApi from "../api/authApi";
import AuthView from "../views/auth";

class Auth extends Component {

    /*componentDidMount() {
        userApi.getUsers();
    }*/

    render() {
        return (
            <AuthView identity={this.props.identity} deleteUser={authApi.deleteUser}/>
        );
    }
}

const mapStateToProps = function (store) {
    return {
        users: store.authState.identity
    };
};

export default connect(mapStateToProps)(Auth);
