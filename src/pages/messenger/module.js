import React from 'react';
import {Route, Switch} from "react-router-dom";
import MessageList from "./components/messageList";
import ChatList from "./components/chatList";

export default function () {
    return (
        <div>
            <h2>Messenger</h2>
            <Switch>
                <Route path='/messenger' component={ChatList}/>
               
            </Switch>
            <div className="row">
                <div className="col-2">
                    {/*<ChatList/>*/}
                </div>
                <div className="col-10">
                </div>
            </div>
        </div>
    );
};
