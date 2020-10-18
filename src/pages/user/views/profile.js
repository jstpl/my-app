import React from 'react';
import {Link} from 'react-router-dom';

// Using "Stateless Functional Components"
export default function (props) {
    return (
        <div className="user-page">
            <h1>{props.user.name} #{props.user.id}</h1>
        </div>
    );
}
