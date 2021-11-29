import React from 'react';
import {Route, Switch} from "react-router-dom";
import Profile from "./components/profile";
import List from "./components/list";

export default function () {
    return (
        <div>
            <h2>This is a user page!</h2>
            <Switch>
                <Route exact path='/messenger' component={List}/>
                <Route exact path='/messenger/:id' component={Profile}/>
            </Switch>
        </div>
    );
};
