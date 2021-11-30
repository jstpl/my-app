import React from 'react';
import {Link, Route, Switch} from "react-router-dom";
import ChatList from "../components/chatList";
import MessageList from "../components/messageList";
// import {Link} from 'react-router-dom';

// Using "Stateless Functional Components"
export default function (props) {
    return (
        <div className="data-list">
            <ul>
                {props.dataProvider && props.dataProvider.collection ? (
                    props.dataProvider.collection.map(function (chatEntity) {
                        return (
                            <li key={chatEntity.id}>
                                <img src={chatEntity.author.logo} width="25"/>

                                {chatEntity.author.username} -
                                {chatEntity.text}
                                {/*<Link to={'/messenger/' + chatEntity.id}>{chatEntity.title}</Link>*/}
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
