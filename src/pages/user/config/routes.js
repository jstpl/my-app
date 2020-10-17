import React from 'react';
import {Route, Switch} from "react-router-dom";
import UserProfile from "../components/user-profile";
import UserList from "../components/user-list";

const UserRoutes = function () {
    return (
        <Switch>
            <Route exact path='/users' component={UserList}/>
            <Route exact path='/users/:id' component={UserProfile}/>
        </Switch>
    );
};

export default UserRoutes;
