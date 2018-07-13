import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import ArtistIndex from './components/ArtistIndex';
import IndividualArtist from './components/IndividualArtist';

class App extends Component {
  render() {
    return <Router>
        <div>
          <Link to="/">All Artists</Link>
          <Switch>
            <Route exact path="/" component={ArtistIndex} />
            <Route exact path="/artists" component={ArtistIndex} />
            <Route exact path='/artists/:artistId/songs/:id' component={IndividualArtist} />

          </Switch>
        </div>
      </Router>;
  }
}

export default App;
