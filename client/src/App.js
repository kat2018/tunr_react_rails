import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ArtistIndex from './components/Artistindex';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/'>All Artists</Link>
          <Switch>
            <Route exact path='/' component={ArtistIndex} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
