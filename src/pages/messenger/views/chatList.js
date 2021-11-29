import React from 'react';
import {Link} from 'react-router-dom';

// Using "Stateless Functional Components"
export default function (props) {
    return (
        <div className="data-list">
            <h1>Chat list</h1>
            <ul>
                {props.dataProvider && props.dataProvider.collection ? (
                    props.dataProvider.collection.map(function (chatEntity) {
                            return (
                                <li key={chatEntity.id}>
                                    <Link to={'/messenger/' + chatEntity.id}>{chatEntity.title}</Link>
                                    {/*<button className="btn btn-primary" onClick={props.deleteUser.bind(this, chatEntity)}>del</button>*/}
                                </li>
                            );
                        })
                ) : (
                    <div>Empty</div>
                )}
            </ul>
        </div>
    );
}
