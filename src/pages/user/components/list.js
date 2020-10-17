import React, {Component} from 'react';
import {Link} from "react-router-dom";
import * as userApi from "../../../api/user-api";
import UserList from "../views/list";

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
    render() {
        return (
            <UserList users={users} deleteUser={userApi.deleteUser}/>
        );
    }
}

export default List;