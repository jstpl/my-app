import React from 'react';
import container from "../../../../../app/config/container";

export default function (props) {
    // console.log(props);
    let myId = container.security.services.userProvider.getTokenEntity().identity.id;

    let isEmpty = !props.dataProvider || !props.dataProvider.collection;
    if(!isEmpty) {
        return (
            <>
                {props.dataProvider.collection.map(function (messageEntity) {
                    let isMy = messageEntity.authorId === myId;
                    return (
                        <div key={messageEntity.id} className={"direct-chat-msg " + (isMy ? 'right' : '')}>
                            <div className="direct-chat-infos clearfix">
                                <span
                                    className={"direct-chat-name " + (isMy ? 'float-right' : 'float-left')}>{messageEntity.author.username}</span>
                                <span
                                    className={"direct-chat-timestamp " + (isMy ? 'float-left' : 'float-right')}>{messageEntity.createdAt}</span>
                            </div>
                            <img className="direct-chat-img"
                                 src={messageEntity.author.logo}
                                 alt="Avatar"/>
                            <div className="direct-chat-text">
                                {messageEntity.text}
                            </div>
                        </div>
                    );
                })}
            </>
        );
    } else {
        return (
            <div>Empty</div>
        );
    }
}
