import React from 'react';
import {Link} from 'react-router-dom';

// Using "Stateless Functional Components"
export default function (props) {
    return (
        <div className="data-list">
            <h1>Users</h1>
            <ul>
                {props.users.map(function (user) {
                    return (
                        <li key={user.id}>
                            <Link to={'/users/' + user.id}>{user.name}</Link>
                            <button className="btn btn-primary" onClick={props.deleteUser.bind(this, user)}>del</button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
