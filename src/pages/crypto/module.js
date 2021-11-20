import React from 'react';
import {Route, Switch} from "react-router-dom";
import List from "./components/list";

export default function () {
    return (
        <div>
            <h2>This is a user page!</h2>
            <Switch>
                <Route exact path='/crypto' component={List}/>
            </Switch>
        </div>
    );
};
