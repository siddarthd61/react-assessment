import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import BugInfo from './components/BugInfo/BugInfo';
import SearchInput from './components/SearchInput/SearchInput';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>React Demo</h1>
        <Router>
          <Route path="/buginfo" component={BugInfo} />
          <Route path="/" component={SearchInput} exact />
        </Router>
      </div>
    );
  }
}

export default App;
