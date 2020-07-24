import React from 'react';
import './App.css';
import Home from './components/index'
import { CssBaseline } from '@material-ui/core';
import SideMenu from'./components';
import Resume from './components/resume'
import Portfolio from './components/portfolio';
import {Route} from 'react-router-dom';
import Contacts from './components/contacts'


function App() {
  return (
    <div>
      <CssBaseline />
        <Route exact path="/" component={Home} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component ={Portfolio} />
        <Route path="/contacts" component ={Contacts} />
    </div>
  );
}

export default App;
