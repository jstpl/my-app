import React from 'react';
import {Switch, Route} from "react-router-dom";
import UserProfile from "./user-profile";
import UserList from "./user-list";

const UserRoutes = function () {
    return (
        <Switch>
            <Route exact path='' component={UserList}/>
            <Route exact path=':id' component={UserProfile}/>
        </Switch>
    );
};

export default UserRoutes;
