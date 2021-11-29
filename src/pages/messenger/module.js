import React from 'react';
import {Route, Switch} from "react-router-dom";
import MessageList from "./components/message-list";
import ChatList from "./components/chat-list";

export default function () {
    return (
        <div>
            <h2>This is a user page!</h2>
            <Switch>
                <Route exact path='/messenger' component={ChatList}/>
                <Route exact path='/messenger/:id' component={MessageList}/>
            </Switch>
        </div>
    );
};
