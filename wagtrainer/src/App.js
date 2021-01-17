import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './index.css';
import Nav from './Components/Nav';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Intercom from './Pages/IntercomPlus';
import Storenet from './Pages/Storenet';
import AS400 from './Pages/AS400';
import GeneralOps from './Pages/GeneralOps';
import Portal from './Pages/Portal';

function App() {

  return (
    <Router>
      <Nav />
      <Switch>
        <Route path='/register'><Register /></Route>
        <Route path='/intercom'><Intercom /></Route>
        <Route path='/storenet'><Storenet /></Route>
        <Route path='/as400'><AS400 /></Route>
        <Route path='/generalOps'><GeneralOps /></Route>
        <Route path='/portal'><Portal /></Route>
        <Route path ='/'><Home /></Route>
        <Route path='*'><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
