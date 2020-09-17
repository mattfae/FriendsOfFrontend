import React from 'react';
import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import MyNavbar from './components/MyNavbar';
import AccountSelector from './components/AccountSelector';
import FriendsOf from './components/FriendsOf';


class App extends Component {

  render() {
    return (
      <div className="App-Main">
        <Router>
          <MyNavbar />
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/friendsof">
              <FriendsOf />
            </Route>
            {/* <Route path="/somepath">
              <SomeComponent />
            </Route> */}
            <Route path="/">
              <AccountSelector />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
