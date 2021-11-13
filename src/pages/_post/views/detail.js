import React from 'react';

// Using "Stateless Functional Components"
export default function (props) {
    let post = props.post;
    return (
        <div className="post-detail">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}
