import React from 'react';
import { Link } from 'react-router-dom';

import {Main, Navigator} from '../../components';
import './main-layout.css';

// Using "Stateless Functional Components"
export default function(props) {
  return (
      <React.Fragment>
          <Navigator/>
          <Main/>
      </React.Fragment>
    );
}
