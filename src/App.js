import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import './App.css';
import '../src/darkmode.css';
// import '../src/lightmode.css';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Plans from './pages/Plans';
import Pricing from './pages/Pricing';
import LoginPage from './pages/Login';
import SubmissionSuccess from './pages/submissionsuccess';

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={Contactus} />
        <Route path="/home" component={HomePage}/>
        <Route path="/plans" component={Plans}/>
        <Route path="/pricing" component={Pricing}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/submissionsuccess" component={SubmissionSuccess}/>
        </div>
    </div>
    </Router>    
  );
}

export default App;