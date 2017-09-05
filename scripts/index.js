import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Layout from './components/Layout.js';

require('../styles/main.less');

const mapp = document.getElementById('mapp');
render(
  <Router>
    <Route path="/" component={Layout} >
    </Route>
  </Router>, mapp);
