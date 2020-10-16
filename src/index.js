import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/home';
import UserList from './pages/user-list';

// ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
    <BrowserRouter>
        <App />
        <Route exact path='/home' component={Home}/>
        <Route exact path='/users' component={UserList}/>
    </BrowserRouter>
), document.getElementById('root'));
