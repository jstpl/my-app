import React from 'react';
import {Link} from 'react-router-dom';

// Using "Stateless Functional Components"
export default function (props) {
    return (
        <div className="data-list">
            <ul>
                {props.posts.map(function (post) {
                    return (
                        <li key={post.id}>
                            <Link to={'/post/' + post.id}>{post.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
