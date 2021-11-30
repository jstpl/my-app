import React from 'react';
import {Link} from 'react-router-dom';
import {ListGroup} from "bootstrap-4-react/lib/components";

// Using "Stateless Functional Components"
export default function (props) {
    return (
        <div className="data-list">
            <h2>Chat list</h2>
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
