import React from 'react';

// import {Main, Navigator} from '../../components';
import Navigator from '../../components/Navigator';
import Main from '../../components/Main';

import './main-layout.css';

export default function () {
    return (
        <React.Fragment>
            <Navigator/>
            <Main/>
        </React.Fragment>
    );
}
