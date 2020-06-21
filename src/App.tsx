import React from 'react';
import './App.css';
import { Sheet } from './Sheet';
import { Club, CLUB_11 } from './model/ClubCriteria';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Home } from './Home';
import { Navigation } from './Navigation';

interface AppState {
  clubSelected: Club;
}
export class App extends React.Component<{}, AppState> {

  constructor(props: any) {
    super(props);
    this.clubSelected = this.clubSelected.bind(this);
    this.state = {
      clubSelected: CLUB_11,
    };
  }

  clubSelected(club: Club) {
    this.setState({
      clubSelected: club
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation onSelection={this.clubSelected} />
          <Switch>
            <Route path="/sheet">
              <Sheet club={this.state.clubSelected} />
            </Route>
            <Route path="/home">
              <Home onSelection={this.clubSelected} />
            </Route>
            <Route path="/">
              <Home onSelection={this.clubSelected} />
            </Route>
          </Switch>
        </div>
      </Router>);
  }
}

export default App;
