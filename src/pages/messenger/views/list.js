import React from 'react';
import {Link} from 'react-router-dom';

// Using "Stateless Functional Components"
export default function (props) {
    return (
        <div className="data-list">
            <h1>Chat list</h1>
            <ul>
                {props.dataProvider.collection.map(function (user) {
                    return (
                        <li key={user.id}>
                            <Link to={'/messenger/' + user.id}>{user.title}</Link>
                            {/*<button className="btn btn-primary" onClick={props.deleteUser.bind(this, user)}>del</button>*/}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
