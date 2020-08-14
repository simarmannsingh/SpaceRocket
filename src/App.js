import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contactus from './pages/Contactus';

function App() {
  return (
    <Router>
      <div className="App">        
        <div id="page-body">
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={Contactus} />
        <Route path="/HomePage" component={HomePage} />
        </div>       
    </div>
    </Router>    
  );
}

export default App;