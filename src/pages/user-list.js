import React, { Component } from 'react';
import {Link, Switch, Route} from "react-router-dom";

// import UserView from 'user';

class UserList extends Component {
    render() {
        return (
            <div>
                <ul className="user-list">
                    <li><Link to="users/2">Michael</Link></li>
                    <li><Link to="users/1">Ryan</Link></li>
                    <li><Link to="users/3">Dan</Link></li>
                    <li><Link to="users/4">Matt</Link></li>
                    <li><Link to="users/5">Tobias</Link></li>
                    <li><Link to="users/6">Sebastian</Link></li>
                </ul>
            </div>
        );
    }
}

export default UserList;
