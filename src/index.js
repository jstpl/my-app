import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
import App from './App';
import {BrowserRouter, HashRouter} from 'react-router-dom';

/*ReactDOM.render((
    <HashRouter>
        <App/>
    </HashRouter>
), document.getElementById('root'));*/

// import Router from './router';
ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);
// Now we can attach the router to the 'root' element like this:
// ReactDOM.render(Router, document.getElementById('root'));
