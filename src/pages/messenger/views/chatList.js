import React from 'react';
import {Link} from 'react-router-dom';

export default function (props) {
    return (
        <div className="data-list">
            <ul className="list-group">
                {props.dataProvider && props.dataProvider.collection ? (
                    props.dataProvider.collection.map(function (chatEntity) {
                        return (
                            <li className="list-group-item list-group-item-action">
                                <Link to={'/messenger/' + chatEntity.id}>{chatEntity.title}</Link>
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
