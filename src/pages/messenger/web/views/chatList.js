import React from 'react';
import {Link} from 'react-router-dom';

export default function (props) {
    return (
        <div className="data-list">
            {props.dataProvider && props.dataProvider.collection ? (
                <ul className="nav flex-column">
                    {props.dataProvider.collection.map(function (chatEntity) {
                        return (
                            <Link key={chatEntity.id} className="nav-link" to={'/messenger/' + chatEntity.id}>{chatEntity.title}</Link>
                        );
                    })}
                </ul>
            ) : (
                <div>Empty</div>
            )}
        </div>
    );
}
