import React, {Component} from 'react';
import {Link} from "react-router-dom";

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
            <div className="data-list">
                <h2>This is a USER page!</h2>
                <ul>
                    {users.map(function (user) {
                        return (
                            <li key={user.id}>
                                <Link to={'/users/' + user.id}>{user.name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default List;
