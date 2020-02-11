import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//css
import './App.css';

//Components
import Home from './ui/components/Home';
import Work from './ui/components/Work';

import NotFoundPage from './ui/components/errors/NotFoundPage';

import MenuBar from './ui/components/utils/MenuBar';

function App() {
  return (
    <Router>
      <MenuBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/Work' component={Work}/>
        <Route component={NotFoundPage}/>
      </Switch>
    </Router>
  );
}
export default App;