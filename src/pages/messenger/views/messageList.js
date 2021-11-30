import React from 'react';

export default function (props) {
    return (
        <div className="data-list">
            <h2>Messages</h2>
            <ul>
                {props.dataProvider && props.dataProvider.collection ? (
                    props.dataProvider.collection.map(function (chatEntity) {
                        return (
                            <li key={chatEntity.id}>
                                <img src={chatEntity.author.logo} width="25"/>

                                {chatEntity.author.username} -
                                {chatEntity.text}
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
