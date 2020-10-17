import React from 'react';

import {Main, Navigator} from '../../components';
import './main-layout.css';

export default function () {
    return (
        <React.Fragment>
            <Navigator/>
            <Main/>
        </React.Fragment>
    );
}
