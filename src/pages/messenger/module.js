import React from 'react';
import {Route, Switch} from "react-router-dom";
import MessageList from "./components/messageList";
import ChatList from "./components/chatList";

export default function () {
    return (
        <div>
            <h2>Messenger</h2>

            <Switch>
                <Route exact path='/messenger' component={ChatList}/>
                <Route exact path='/messenger/:id' component={MessageList}/>
            </Switch>

            <div className="row">
                <div className="col-2">

                </div>
                <div className="col-10">

                </div>
            </div>
        </div>
    );
};
