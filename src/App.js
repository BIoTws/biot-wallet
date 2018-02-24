import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Auth from './Auth';
import Main from './Main';
import './normalize.css';
import './App.css';
class App extends Component {
  render() {
    return (
        <Router>
           <div className="container">
               <Route path="/" exact component={Main} />
               <Route path="/auth" component={Auth} />
           </div>
        </Router>
    );
  }
}

export default App;
