import React from 'react';
import {Route, Switch} from "react-router-dom";
import Profile from "../components/profile";
import List from "../components/list";

const UserRoutes = function () {
    return (
        <div>
            <h2>This is a user page!</h2>
            <Switch>
                <Route exact path='/users' component={List}/>
                <Route exact path='/users/:id' component={Profile}/>
            </Switch>
        </div>
    );
};

export default UserRoutes;
