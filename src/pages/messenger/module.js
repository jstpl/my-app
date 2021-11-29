import React from 'react';
import {Route, Switch} from "react-router-dom";
import Profile from "./components/profile";
import ChatList from "./components/chat-list";

export default function () {
    return (
        <div>
            <h2>This is a user page!</h2>
            <Switch>
                <Route exact path='/messenger' component={ChatList}/>
                <Route exact path='/messenger/:id' component={Profile}/>
            </Switch>
        </div>
    );
};
