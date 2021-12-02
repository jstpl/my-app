import React from 'react';
import {Route, Switch} from "react-router-dom";
import Auth from "./components/auth";
import Logout from "./components/logout";

export default function () {
    return (
        <div>
            {/*<h2>This is a user page!</h2>*/}
            <Switch>
                <Route exact path='/auth' component={Auth}/>
                <Route exact path='/logout' component={Logout}/>
            </Switch>
        </div>
    );
};
