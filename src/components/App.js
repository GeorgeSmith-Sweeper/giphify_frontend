
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div>
            <Route path="/" exact component={Home} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
