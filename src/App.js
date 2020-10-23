import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import ServiceSelector from './components/ServiceSelector';
import TwitLogin from './components/TwitLogin';
import MyNavbar from './components/MyNavbar';
import AccountSelector from './components/AccountSelector';


class App extends Component {

  render() {
      return (
        <div className="App-Main">

            <MyNavbar />

            <Switch>

              <Route exact path="/" component={ServiceSelector} />
              <Route path="/friendsof" component={AccountSelector} />
              <Route path="/seconddegree" component={TwitLogin} />

            </Switch>

        </div>
      );
  }
}

export default App;
