import React from 'react';
import {Route, Switch} from "react-router-dom";
import Profile from "../components/profile";
import List from "../components/list";

const UserRoutes = function () {
    return (
        <Switch>
            <Route exact path='/users' component={List}/>
            <Route exact path='/users/:id' component={Profile}/>
        </Switch>
    );
};

export default UserRoutes;
