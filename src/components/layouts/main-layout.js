import React from 'react';
import { Link } from 'react-router-dom';

import {Main, Navigator} from '../../components';
import '../../App.css';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
        <Navigator/>
        <Main/>
    </div>
    );
}
