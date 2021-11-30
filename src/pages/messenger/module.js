import React from 'react';
import {Route, Switch} from "react-router-dom";
import MessageList from "./components/messageList";
import ChatList from "./components/chatList";

export default function () {
    return (
        <div>
            <h2>Messenger</h2>
            <div className="row">
                <div className="col-2">
                    <ChatList/>
                </div>
                <div className="col-10">
                    <Switch>
                        <Route exact path='/messenger/:chatId' component={MessageList}/>
                    </Switch>
                </div>
            </div>
        </div>
    );
};
