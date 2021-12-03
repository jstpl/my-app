import React from 'react';
import {Route, Switch} from "react-router-dom";
import Login from "./components/login";
import Logout from "./components/logout";

export default function () {
    return (
        <div>
            {/*<h2>This is a user page!</h2>*/}
            <Switch>
                <Route exact path='/user/login' component={Login}/>
                <Route exact path='/user/logout' component={Logout}/>
            </Switch>
        </div>
    );
};
